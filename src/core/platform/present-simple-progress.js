import { supabase } from "./supabase-client.js";

export async function getCurrentUserId() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    throw error;
  }

  return user?.id ?? null;
}

export async function getMyPresentSimpleModuleRow() {
  const userId = await getCurrentUserId();

  if (!userId) {
    return null;
  }

  const { data, error } = await supabase
    .from("module_progress")
    .select("*")
    .eq("user_id", userId)
    .eq("module_slug", "present-simple")
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

export async function upsertMyPresentSimpleModuleRow(patch = {}) {
  const userId = await getCurrentUserId();

  if (!userId) {
    throw new Error("No authenticated user.");
  }

  const payload = {
    user_id: userId,
    module_slug: "present-simple",
    status: "in_progress",
    progress_percent: 0,
    current_section: null,
    last_room_id: null,
    badge_earned: false,
    completed_at: null,
    ...patch,
  };

  const { data, error } = await supabase
    .from("module_progress")
    .upsert(payload, {
      onConflict: "user_id,module_slug",
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getMyPresentSimpleRoomRows() {
  const userId = await getCurrentUserId();

  if (!userId) {
    return [];
  }

  const { data, error } = await supabase
    .from("room_progress")
    .select("*")
    .eq("user_id", userId)
    .eq("module_slug", "present-simple")
    .order("room_id", { ascending: true });

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function upsertMyPresentSimpleRoomRow(roomId, patch = {}) {
  const userId = await getCurrentUserId();

  if (!userId) {
    throw new Error("No authenticated user.");
  }

  if (!roomId) {
    throw new Error("roomId is required.");
  }

  const payload = {
    user_id: userId,
    module_slug: "present-simple",
    section_slug: "affirmative",
    room_id: roomId,
    is_unlocked: true,
    is_completed: false,
    score_first_try: null,
    score_best: null,
    key_earned: false,
    attempt_count: 0,
    ...patch,
  };

  const { data, error } = await supabase
    .from("room_progress")
    .upsert(payload, {
      onConflict: "user_id,module_slug,room_id",
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export function buildPresentSimpleRoomProgressPatch({
  sectionId,
  roomNumber,
  roomState,
}) {
  return {
    section_slug: sectionId,
    is_unlocked: true,
    is_completed: !!roomState?.passed,
    score_first_try: roomState?.firstAttemptScore ?? null,
    score_best: roomState?.passed
      ? 100
      : (roomState?.firstAttemptScore ?? null),
    key_earned: !!roomState?.hasKey,
    attempt_count: roomState?.firstAttemptScore === null ? 0 : 1,
  };
}

export function buildPresentSimpleRoomId(sectionId, roomNumber) {
  return `ps-${sectionId}-room-${roomNumber}`;
}

export async function savePresentSimpleRoomProgress({
  sectionId,
  roomNumber,
  roomState,
}) {
  const roomId = buildPresentSimpleRoomId(sectionId, roomNumber);

  const patch = buildPresentSimpleRoomProgressPatch({
    sectionId,
    roomNumber,
    roomState,
  });

  const result = await upsertMyPresentSimpleRoomRow(roomId, patch);
  await syncPresentSimpleModuleProgressFromRoomRows();
  return result;
}

function getRoomNumberFromRoomId(roomId) {
  const match = /-room-(\d+)$/.exec(roomId || "");
  if (!match) {
    return null;
  }

  return Number(match[1]);
}

function getSafeFallbackRoomState(
  fallbackProgressManager,
  sectionId,
  roomNumber,
) {
  try {
    return (
      fallbackProgressManager?.getRoomState?.(sectionId, roomNumber) ?? {
        firstAttemptScore: null,
        passed: false,
        hasKey: false,
      }
    );
  } catch (error) {
    return {
      firstAttemptScore: null,
      passed: false,
      hasKey: false,
    };
  }
}

export function createPresentSimpleHybridProgressManager({
  roomRows = [],
  fallbackProgressManager,
  sections = [],
  roomsPerSection = 7,
}) {
  const rowByKey = new Map();

  for (const row of roomRows) {
    const sectionId = row?.section_slug;
    const roomNumber = getRoomNumberFromRoomId(row?.room_id);

    if (!sectionId || !Number.isInteger(roomNumber)) {
      continue;
    }

    rowByKey.set(`${sectionId}::${roomNumber}`, row);
  }

  function getRoomState(sectionId, roomNumber) {
    const row = rowByKey.get(`${sectionId}::${roomNumber}`);

    if (row) {
      return {
        firstAttemptScore:
          typeof row.score_first_try === "number" ? row.score_first_try : null,
        passed: row.is_completed === true,
        hasKey: row.key_earned === true,
      };
    }

    return getSafeFallbackRoomState(
      fallbackProgressManager,
      sectionId,
      roomNumber,
    );
  }

  return {
    getRoomState(sectionId, roomNumber) {
      return getRoomState(sectionId, roomNumber);
    },

    getSectionOverview(sectionId, totalRooms = roomsPerSection) {
      const rooms = [];

      for (let roomNumber = 1; roomNumber <= totalRooms; roomNumber += 1) {
        rooms.push(getRoomState(sectionId, roomNumber));
      }

      return rooms;
    },

    getTotalKeysInfo() {
      const learningSections = (sections || []).filter(
        (section) => section?.id && section.id !== "badge",
      );

      const totalRequired = learningSections.length * roomsPerSection;
      let obtainedKeys = 0;

      for (const section of learningSections) {
        for (
          let roomNumber = 1;
          roomNumber <= roomsPerSection;
          roomNumber += 1
        ) {
          const state = getRoomState(section.id, roomNumber);
          if (state.hasKey) {
            obtainedKeys += 1;
          }
        }
      }

      return {
        obtainedKeys,
        totalRequired,
        hasAllKeys: totalRequired > 0 && obtainedKeys === totalRequired,
      };
    },

    getAllKeysPerSection() {
      const learningSections = (sections || []).filter(
        (section) => section?.id && section.id !== "badge",
      );

      return learningSections.map((section) => {
        let obtainedKeys = 0;

        for (
          let roomNumber = 1;
          roomNumber <= roomsPerSection;
          roomNumber += 1
        ) {
          const state = getRoomState(section.id, roomNumber);
          if (state.hasKey) {
            obtainedKeys += 1;
          }
        }

        return {
          id: section.id,
          title: section.title,
          obtainedKeys,
          totalRooms: roomsPerSection,
          hasAllKeys: obtainedKeys === roomsPerSection,
        };
      });
    },
  };
}

export async function upsertMyPresentSimpleBadgeRow(patch = {}) {
  const userId = await getCurrentUserId();

  if (!userId) {
    throw new Error("No authenticated user.");
  }

  const payload = {
    user_id: userId,
    module_slug: "present-simple",
    section_slug: "badge",
    room_id: "ps-badge-room-1",
    is_unlocked: true,
    is_completed: false,
    score_first_try: null,
    score_best: null,
    key_earned: false,
    attempt_count: 0,
    ...patch,
  };

  const { data, error } = await supabase
    .from("room_progress")
    .upsert(payload, {
      onConflict: "user_id,module_slug,room_id",
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function savePresentSimpleBadgeProgress({ scorePercent, passed }) {
  const result = await upsertMyPresentSimpleBadgeRow({
    section_slug: "badge",
    is_unlocked: true,
    is_completed: !!passed,
    score_first_try: typeof scorePercent === "number" ? scorePercent : null,
    score_best: typeof scorePercent === "number" ? scorePercent : null,
    key_earned: false,
    attempt_count: 1,
  });

  await syncPresentSimpleModuleProgressFromRoomRows();

  return result;
}

export function buildPresentSimpleModulePatchFromRoomRows(roomRows = []) {
  const learningRows = roomRows.filter(
    (row) => row?.section_slug && row.section_slug !== "badge",
  );

  const completedLearningRows = learningRows.filter(
    (row) => row?.is_completed === true,
  );

  const badgeRow =
    roomRows.find(
      (row) =>
        row?.section_slug === "badge" || row?.room_id === "ps-badge-room-1",
    ) ?? null;

  const progressPercent =
    learningRows.length > 0
      ? Math.round((completedLearningRows.length / learningRows.length) * 100)
      : 0;

  const lastCompletedLearningRow =
    [...completedLearningRows].sort((a, b) => {
      const aTime = a?.updated_at ? new Date(a.updated_at).getTime() : 0;
      const bTime = b?.updated_at ? new Date(b.updated_at).getTime() : 0;
      return bTime - aTime;
    })[0] ?? null;

  const badgeEarned = badgeRow?.is_completed === true;

  return {
    status: badgeEarned
      ? "completed"
      : completedLearningRows.length > 0
        ? "in_progress"
        : "not_started",
    progress_percent: progressPercent,
    current_section: lastCompletedLearningRow?.section_slug ?? null,
    last_room_id: lastCompletedLearningRow?.room_id ?? null,
    badge_earned: badgeEarned,
    completed_at: badgeEarned ? new Date().toISOString() : null,
  };
}

export async function syncPresentSimpleModuleProgressFromRoomRows() {
  const roomRows = await getMyPresentSimpleRoomRows();

  const patch = buildPresentSimpleModulePatchFromRoomRows(roomRows);

  return upsertMyPresentSimpleModuleRow(patch);
}

export async function getMyPresentSimpleTheoryRows() {
  const userId = await getCurrentUserId();

  if (!userId) {
    return [];
  }

  const { data, error } = await supabase
    .from("theory_progress")
    .select("*")
    .eq("user_id", userId)
    .eq("module_slug", "present-simple")
    .order("section_slug", { ascending: true });

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function upsertMyPresentSimpleTheoryRow(sectionId, patch = {}) {
  const userId = await getCurrentUserId();

  if (!userId) {
    throw new Error("No authenticated user.");
  }

  if (!sectionId) {
    throw new Error("sectionId is required.");
  }

  const payload = {
    user_id: userId,
    module_slug: "present-simple",
    section_slug: sectionId,
    is_completed: false,
    completed_at: null,
    ...patch,
  };

  const { data, error } = await supabase
    .from("theory_progress")
    .upsert(payload, {
      onConflict: "user_id,module_slug,section_slug",
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function savePresentSimpleTheoryProgress(sectionId) {
  return upsertMyPresentSimpleTheoryRow(sectionId, {
    is_completed: true,
    completed_at: new Date().toISOString(),
  });
}

export function createPresentSimpleHybridTheoryProgress({
  theoryRows = [],
  fallbackTheoryProgress,
}) {
  const completedSections = new Set(
    (theoryRows || [])
      .filter((row) => row?.is_completed === true && row?.section_slug)
      .map((row) => row.section_slug),
  );

  return {
    markTheoryCompleted(sectionId) {
      if (!sectionId) return;

      if (typeof fallbackTheoryProgress?.markTheoryCompleted === "function") {
        fallbackTheoryProgress.markTheoryCompleted(sectionId);
      }

      return Promise.resolve(savePresentSimpleTheoryProgress(sectionId)).catch(
        (error) => {
          console.warn(
            "Failed to persist Present Simple theory progress",
            error,
          );
        },
      );
    },

    isTheoryCompleted(sectionId) {
      if (!sectionId) return false;

      if (completedSections.has(sectionId)) {
        return true;
      }

      try {
        return Boolean(
          fallbackTheoryProgress?.isTheoryCompleted?.(sectionId) ?? false,
        );
      } catch (error) {
        return false;
      }
    },
  };
}

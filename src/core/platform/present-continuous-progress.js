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

export async function savePresentContinuousTheoryProgress(sectionId) {
  const userId = await getCurrentUserId();

  if (!userId) {
    return null;
  }

  if (!sectionId) {
    throw new Error("sectionId is required.");
  }

  const payload = {
    user_id: userId,
    module_slug: "present-continuous",
    section_slug: sectionId,
    is_completed: true,
    completed_at: new Date().toISOString(),
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

export async function getPresentContinuousTheoryProgressRows() {
  const userId = await getCurrentUserId();

  if (!userId) {
    return [];
  }

  const { data, error } = await supabase
    .from("theory_progress")
    .select("*")
    .eq("user_id", userId)
    .eq("module_slug", "present-continuous");

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function getPresentContinuousRoomProgressRows() {
  const userId = await getCurrentUserId();

  if (!userId) {
    return [];
  }

  const { data, error } = await supabase
    .from("room_progress")
    .select("*")
    .eq("user_id", userId)
    .eq("module_slug", "present-continuous")
    .order("room_id", { ascending: true });

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function upsertMyPresentContinuousRoomRow(roomId, patch = {}) {
  const userId = await getCurrentUserId();

  if (!userId) {
    throw new Error("No authenticated user.");
  }

  if (!roomId) {
    throw new Error("roomId is required.");
  }

  const payload = {
    user_id: userId,
    module_slug: "present-continuous",
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

export function buildPresentContinuousRoomProgressPatch({
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

export function buildPresentContinuousRoomId(sectionId, roomNumber) {
  return `pc-${sectionId}-room-${roomNumber}`;
}

export async function savePresentContinuousRoomProgress({
  sectionId,
  roomNumber,
  roomState,
}) {
  const roomId = buildPresentContinuousRoomId(sectionId, roomNumber);

  const patch = buildPresentContinuousRoomProgressPatch({
    sectionId,
    roomNumber,
    roomState,
  });

  return upsertMyPresentContinuousRoomRow(roomId, patch);
}

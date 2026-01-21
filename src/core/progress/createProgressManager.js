/**
 * Generic progress manager (rooms, first-attempt, passed, key).
 *
 * It is tense-agnostic: callers inject `storage`, `sections` and `roomsPerSection`.
 *
 * NOTE: it intentionally keeps the SAME storage key patterns as the legacy engine:
 *   `${sectionId}_room${roomNumber}_first` / `_passed` / `_key`
 * so migration is purely a refactor (no schema change).
 */

const roomKey = (sectionId, roomNumber, suffix) =>
  `${sectionId}_room${roomNumber}_${suffix}`;

const persistRoomState = (storage, sectionId, roomNumber, state) => {
  storage.set(roomKey(sectionId, roomNumber, "first"), state.firstAttemptScore);
  storage.set(roomKey(sectionId, roomNumber, "passed"), state.passed);
  storage.set(roomKey(sectionId, roomNumber, "key"), state.hasKey);
  return state;
};

export function createProgressManager({ storage, sections = [], roomsPerSection = 7 }) {
  return {
    getRoomState(sectionId, roomNumber) {
      const firstAttemptScoreRaw = storage.get(
        roomKey(sectionId, roomNumber, "first"),
        null
      );
      const firstAttemptScore =
        typeof firstAttemptScoreRaw === "number" ? firstAttemptScoreRaw : null;

      return {
        firstAttemptScore,
        passed: !!storage.get(roomKey(sectionId, roomNumber, "passed"), false),
        hasKey: !!storage.get(roomKey(sectionId, roomNumber, "key"), false),
      };
    },

    resetRoom(sectionId, roomNumber) {
      storage.remove(roomKey(sectionId, roomNumber, "first"));
      storage.remove(roomKey(sectionId, roomNumber, "passed"));
      storage.remove(roomKey(sectionId, roomNumber, "key"));

      // Keep backwards behavior: callers expect an updated roomState after reset.
      return this.getRoomState(sectionId, roomNumber);
    },

    setFirstAttempt(sectionId, roomNumber, percent) {
      const state = this.getRoomState(sectionId, roomNumber);

      if (state.firstAttemptScore === null) {
        state.firstAttemptScore = percent;

        if (percent === 100) {
          state.passed = true;
          state.hasKey = true;
        }

        return persistRoomState(storage, sectionId, roomNumber, state);
      }

      return state;
    },

    recordAttempt(sectionId, roomNumber, percent) {
      const state = this.getRoomState(sectionId, roomNumber);

      if (percent === 100) {
        state.passed = true;
      }

      return persistRoomState(storage, sectionId, roomNumber, state);
    },

    grantKey(sectionId, roomNumber) {
      const state = this.getRoomState(sectionId, roomNumber);

      state.hasKey = true;
      state.passed = true;

      return persistRoomState(storage, sectionId, roomNumber, state);
    },

    getSectionOverview(sectionId, totalRooms = roomsPerSection) {
      const rooms = [];
      for (let i = 1; i <= totalRooms; i += 1) {
        rooms.push(this.getRoomState(sectionId, i));
      }
      return rooms;
    },

    getTotalKeysInfo() {
      let obtainedKeys = 0;

      const learningSections = (sections || []).filter(
        (section) => section?.id && section.id !== "badge"
      );

      const totalRequired = learningSections.length * roomsPerSection;

      learningSections.forEach((section) => {
        for (let room = 1; room <= roomsPerSection; room += 1) {
          const state = this.getRoomState(section.id, room);
          if (state.hasKey) obtainedKeys += 1;
        }
      });

      return {
        obtainedKeys,
        totalRequired,
        hasAllKeys: obtainedKeys === totalRequired,
      };
    },

    getAllKeysPerSection() {
      const learningSections = (sections || []).filter(
        (section) => section?.id && section.id !== "badge"
      );

      return learningSections.map((section) => {
        let keys = 0;

        for (let room = 1; room <= roomsPerSection; room += 1) {
          const state = this.getRoomState(section.id, room);
          if (state.hasKey) keys += 1;
        }

        return {
          id: section.id,
          title: section.title,
          obtainedKeys: keys,
          totalRooms: roomsPerSection,
          hasAllKeys: keys === roomsPerSection,
        };
      });
    },
  };
}

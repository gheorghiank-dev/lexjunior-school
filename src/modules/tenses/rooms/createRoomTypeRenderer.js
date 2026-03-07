import { renderExercisesByRoomType } from "../exercises/renderExercisesByRoomType.jsx";

export function createRoomTypeRenderer(roomNumber, config = {}) {
  return function renderExercises(props) {
    return renderExercisesByRoomType({
      roomNumber,
      ...config,
      ...props,
    });
  };
}

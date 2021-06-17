export default function boards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARDS_SUCCESS": {
      return action.boards;
    }
    case "CREATE_BOARD_SUCCESS": {
      const newBoard = action.board;
      return state.concat(newBoard);
    }
    case "FETCH_BOARD_SUCCESS": {
      const fetchedBoard = action.board;
      const exists = state.find((board) => board._id === fetchedBoard._id);

      if (exists) {
        return state.map((board) => {
          return board._id === fetchedBoard._id ? fetchedBoard : board;
        });
      } else {
        return state.concat(fetchedBoard);
      }
    }
    default:
      return state;
  }
}

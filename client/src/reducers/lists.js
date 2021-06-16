export default function lists(state = [], action) {
    switch (action.type) {
      
      case "FETCH_BOARD_SUCCESS": {
          console.log("list action", action)
        return action.board.lists
      }
      default:
        return state;
    }
  }
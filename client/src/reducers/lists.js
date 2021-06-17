export default function lists(state = [], action) {
    switch (action.type) {

      case "FETCH_BOARD_SUCCESS": {
        console.log("list action", action)
        let seen = {};

        // save existing lists to new obj
        state.forEach((list) => {
          seen[list._id] = list;
        });
        // update any new lists in the obj
        action.board.lists.forEach(list => {
          seen[list._id] = list;
        });

        return Object.values(seen);
      }
      default:
        return state;
    }
  }
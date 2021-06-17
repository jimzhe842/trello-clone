export default function cards(state = [], action) {
  switch (action.type) {

    case "FETCH_BOARD_SUCCESS": {
      console.log("card action", action)
      let seen = {};

      // save existing lists to new obj
      state.forEach((card) => {
        seen[card._id] = card;
      });
      // update any new lists in the obj
      action.board.lists.forEach(list => {
        list.cards.forEach(card => {
          seen[card._id] = card;
        });
      });

      return Object.values(seen);
    }
    default:
      return state;
  }
}
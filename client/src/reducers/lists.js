export default function lists(state = [], action) {
    switch (action.type) {

      case "FETCH_BOARD_SUCCESS": {
        const {lists} = action.board;

        const listsWithoutCards = lists.map((list) => {
          const {cards, ...listWithoutCards} = list;
          console.log(cards);
          return listWithoutCards;
        });

        const filteredState = state.filter(list => list.boardId !== action.board._id);
        return filteredState.concat(listsWithoutCards);
      } case "CREATE_LIST_SUCCESS": {
        const newList = action.list;
        return state.concat(newList);
      } case "UPDATE_LIST_SUCCESS": {
        const updatedList = action.list;
        const newState = state.map(list => {
          if (list._id !== updatedList._id) {
            return list;
          } else {
            return {...updatedList};
          }
        });
        return newState;
      }
      default:
        return state;
    }
  }
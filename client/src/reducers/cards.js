export default function cards(state = [], action) {
  switch (action.type) {

    case "FETCH_BOARD_SUCCESS": {
      const {lists} = action.board;

      const cards = lists.reduce((acc, list) => {
        const {cards} = list;
        return acc.concat(cards);
      }, []);

      // const filteredState = state.filter(card => card.boardId !== action.board._id);

      // return filteredState.concat(cards);
      return cards;
    }
    default:
      return state;
  }
}
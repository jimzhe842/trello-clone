export default function cards(state = [], action) {
	switch (action.type) {
		case 'FETCH_BOARD_SUCCESS': {
			const { lists } = action.board;

			const cards = lists.reduce((acc, list) => {
				const { cards } = list;
				return acc.concat(cards);
			}, []);

			const filteredState = state.filter((card) => card.boardId !== action.board._id);

			return filteredState.concat(cards);
		}
		case 'CREATE_CARD_SUCCESS': {
			const newCard = action.card;
			return state.concat(newCard);
		}
		case 'FETCH_CARD_SUCCESS': {
			const fetchedCard = action.card;
			const exists = state.find((card) => card._id === fetchedCard._id);

			if (exists) {
				return state.map((card) => {
					return card._id === fetchedCard._id ? fetchedCard : card;
				});
			} else {
				return state.concat(fetchedCard);
			}
		} case 'UPDATE_CARD_SUCCESS': {
      const updatedCard = action.card;
      const updatedState = state.map((card) => {
        return card._id === updatedCard._id ? updatedCard : {...card};
      });

      return updatedState
    }
		default:
			return state;
	}
}

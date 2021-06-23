import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function addNewCardRequest() {
	return { type: types.CREATE_CARD_REQUEST };
}

export function createCardSuccess(card) {
	return { type: types.CREATE_CARD_SUCCESS, card: card };
}

export function fetchCardRequest() {
	return { type: types.FETCH_CARD_REQUEST };
}

export function fetchCardSuccess(card) {
	return { type: types.FETCH_CARD_SUCCESS, card: card };
}

export function updateCardRequest() {
  return { type: types.UPDATE_CARD_REQUEST };
}

export function updateCardSuccess(card) {
  return { type: types.UPDATE_CARD_SUCCESS, card: card };
}

export function addCard({ _id, title, boardId }, callback) {
	const newCard = { listId: _id, card: { title }, boardId };
	return function(dispatch) {
		dispatch(addNewCardRequest());
		apiClient.createCard(newCard, (data) => {
			dispatch(createCardSuccess(data));

			if (callback) callback();
		});
	};
}

export function getCard(id) {
	return function(dispatch) {
		dispatch(fetchCardRequest(id));
		apiClient.getCard(id, (data) => dispatch(fetchCardSuccess(data)));
	};
}

export function updateCard(id, cardData, callback) {
  return function(dispatch) {
    dispatch(updateCardRequest());
    apiClient.updateCard(id, cardData, data => {
      dispatch(updateCardSuccess(data));

      if (callback) callback();
    });
  }
}

// Example payload:
// {
//   "card": {
//     "title": "My updated title",
//     "completed": true
//   }
// }
// At least one attribute must be included in a "card"object in the payload.
// The allowed attributes are:

// title
// listId
// position
// description
// archived
// dueDate
// completed
// labels

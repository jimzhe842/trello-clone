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

			if (callback) {
				callback();
			}
		});
	};
}

export function getCard(id) {
	return function(dispatch) {
		dispatch(fetchCardRequest(id));
		apiClient.getCard(id, (data) => dispatch(fetchCardSuccess(data)));
	};
}

export function updateCard(card, callback) {
  return function(dispatch) {
    dispatch(updateCardRequest());
    apiClient.updateCard(card, data => {
      dispatch(updateCardSuccess(data));

      if (callback) { callback(); }
    });
  }
}

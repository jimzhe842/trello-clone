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

/*
    export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list: list };
}

export function updateListRequest() {
  return { type: types.UPDATE_LIST_REQUEST };
}

export function updateListSuccess(list) {
  return { type: types.UPDATE_LIST_SUCCESS, list: list };
}

export function createList({boardId, inputState}, callback) {
  const newList = { boardId, list: { title: inputState }};
  return function(dispatch) {
    dispatch(createListRequest());
    apiClient.createList(newList, data => {
      dispatch(createListSuccess(data));

      if (callback) {
        callback();
      }
    });
  }
}

export function updateList({_id, listTitle, position}, callback) {
  const updatedInfo = {_id, title: listTitle, position};
  return function(dispatch) {
    dispatch(updateListRequest());
    apiClient.updateList(updatedInfo, data => {
      dispatch(updateListSuccess(data));

      if (callback) {
        callback();
      }
    })
  }
}
*/

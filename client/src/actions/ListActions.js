import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

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
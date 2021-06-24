import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function createCommentRequest() {
	return { type: types.CREATE_COMMENT_REQUEST };
}

export function createCommentSuccess(comment) {
	return { type: types.CREATE_COMMENT_SUCCESS, comment: comment };
}

export function addComment({ cardId, comment }, callback) {
	const newComment = { cardId, comment: { text: comment } };
	return function(dispatch) {
		dispatch(createCommentRequest());
		apiClient.createComment(newComment, (data) => {
			dispatch(createCommentSuccess(data));

			if (callback) callback();
		});
	};
}

// export function getCard(id) {
// 	return function(dispatch) {
// 		dispatch(fetchCardRequest(id));
// 		apiClient.getCard(id, (data) => dispatch(fetchCardSuccess(data)));
// 	};
// }

// export function updateCard(id, cardData, callback) {
//   return function(dispatch) {
//     dispatch(updateCardRequest());
//     apiClient.updateCard(id, cardData, data => {
//       dispatch(updateCardSuccess(data));

//       if (callback) callback();
//     });
//   }
// }
import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export function posts(previousState = initialState.posts, action) {
	switch (action.type) {
		case actionTypes.UPVOTE_POST_ACTION_TYPE:
			return {
				...previousState,
				byId: {
					...previousState.byId,
					[action.payload.postId]: {
						...previousState.byId[action.payload.postId],
						points: previousState.byId[action.payload.postId].points + 1,
					},
				},
			};

		case actionTypes.CREATE_POST_ACTION_TYPE:
			return {
				...previousState,
				byId: {
					...previousState.byId,
					[action.payload.id]: {
						...action.payload,
					},
				},
				allIds: [...previousState.allIds, action.payload.id],
			};

		case actionTypes.DELETE_POST_ACTION_TYPE:
			const { allIds, byId } = previousState;

			const postIdsRemaining = allIds.filter(
				postId => postId !== action.payload.id,
			);

			return {
				...previousState,
				byId: {
					...postIdsRemaining.map(postId => byId[postId]),
				},
				allIds: [...postIdsRemaining],
			};

		default:
			return previousState;
	}
}

export function comments(previouState = initialState.comments, action) {
	return previouState;
}

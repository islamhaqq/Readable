import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export function posts(previousState = initialState.posts, action) {
	switch (action.type) {
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

		case actionTypes.EDIT_POST_ACTION_TYPE:
			return {
				...previousState,
				byId: {
					...previousState.byId,
					[action.payload.id]: {
						...previousState.byId[action.payload.id],
						...action.payload,
					},
				},
			};

		case actionTypes.DELETE_POST_ACTION_TYPE:
			const { allIds, byId } = previousState;

			const postIdsRemaining = allIds.filter(
				postId => postId !== action.payload.id,
			);

			return {
				...previousState,
				byId: {
					...postIdsRemaining.reduce((postsById, postId) => {
						postsById[postId] = byId[postId];
						return postsById;
					}, {}),
				},
				allIds: [...postIdsRemaining],
			};

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

		case actionTypes.DOWNVOTE_POST_ACTION_TYPE:
			return {
				...previousState,
				byId: {
					...previousState.byId,
					[action.payload.postId]: {
						...previousState.byId[action.payload.postId],
						points: previousState.byId[action.payload.postId].points - 1,
					},
				},
			};

		case actionTypes.ADD_COMMENT_ACTION_TYPE:
			const { postId, id } = action.payload;

			return {
				...previousState,
				byId: {
					...previousState.byId,
					[postId]: {
						...previousState.byId[postId],
						comments: [...previousState.byId[postId].comments, id],
					},
				},
			};

		default:
			return previousState;
	}
}

export function comments(previousState = initialState.comments, action) {
	switch (action.type) {
		case actionTypes.ADD_COMMENT_ACTION_TYPE:
			const { id, author, body, points, timestamp } = action.payload;

			return {
				...previousState,
				byId: {
					...previousState.byId,
					[id]: {
						id,
						author,
						body,
						points,
						timestamp,
					},
				},
				allIds: [...previousState.allIds, id],
			};

		case actionTypes.EDIT_COMMENT_ACTION_TYPE:
			return {
				...previousState,
				byId: {
					...previousState.byIds,
				},
			};

		case actionTypes.DELETE_COMMENT_ACTION_TYPE:
			return {};

		default:
			return previousState;
	}
}

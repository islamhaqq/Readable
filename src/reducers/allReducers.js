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
						voteScore: previousState.byId[action.payload.postId].voteScore + 1,
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
						voteScore: previousState.byId[action.payload.postId].voteScore - 1,
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

		case actionTypes.DELETE_COMMENT_ACTION_TYPE:
			return {
				...previousState,
				byId: {
					...previousState.byId,
					[action.payload.postId]: {
						...previousState.byId[action.payload.postId],
						comments: previousState.byId[action.payload.postId].comments.filter(
							commentId => action.payload.id !== commentId,
						),
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
			const {
				id,
				author,
				body,
				voteScore,
				deleted,
				timestamp,
			} = action.payload;

			return {
				...previousState,
				byId: {
					...previousState.byId,
					[id]: {
						id,
						author,
						body,
						voteScore,
						deleted,
						timestamp,
					},
				},
				allIds: [...previousState.allIds, id],
			};

		case actionTypes.EDIT_COMMENT_ACTION_TYPE:
			return {
				...previousState,
				byId: {
					...previousState.byId,
					[action.payload.id]: {
						...previousState.byId[action.payload.id],
						body: action.payload.body,
					},
				},
			};

		case actionTypes.DELETE_COMMENT_ACTION_TYPE:
			const { allIds, byId } = previousState;

			const commentIdsRemaining = allIds.filter(
				postId => postId !== action.payload.id,
			);

			return {
				...previousState,
				byId: {
					...commentIdsRemaining.reduce(
						(commentsById, commentId) => ({
							...commentsById,
							[commentId]: byId[commentId],
						}),
						{},
					),
				},
				allIds: [...commentIdsRemaining],
			};

		case actionTypes.UPVOTE_COMMENT_ACTION_TYPE:
			return {
				...previousState,
				byId: {
					...previousState.byId,
					[action.payload.commentId]: {
						...previousState.byId[action.payload.commentId],
						voteScore:
							previousState.byId[action.payload.commentId].voteScore + 1,
					},
				},
			};

		case actionTypes.DOWNVOTE_COMMENT_ACTION_TYPE:
			return {
				...previousState,
				byId: {
					...previousState.byId,
					[action.payload.commentId]: {
						...previousState.byId[action.payload.commentId],
						voteScore:
							previousState.byId[action.payload.commentId].voteScore - 1,
					},
				},
			};

		case actionTypes.DELETE_POST_ACTION_TYPE:
			const remainingCommentIds = previousState.allIds.filter(
				commentId => !action.payload.comments.includes(commentId),
			);

			return {
				...previousState,
				allIds: remainingCommentIds,
				byId: {
					...remainingCommentIds.reduce(
						(commentsById, commentId) => ({
							...commentsById,
							[commentId]: previousState.byId[commentId],
						}),
						{},
					),
				},
			};

		default:
			return previousState;
	}
}

export function general(previousState = initialState.general, action) {
	switch (action.type) {
		case actionTypes.REQUEST_ALL_POSTS_ACTION_TYPE:
			return {
				...previousState,
				isLoading: true,
			};
		case actionTypes.RECEIVE_ALL_POSTS_ACTION_TYPE:
			return {
				...previousState,
				isLoading: false,
			};
		default:
			return previousState;
	}
}

import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export function posts(previousState = initialState.posts, action) {
	switch (action.type) {
		case actionTypes.RECEIVE_ALL_POSTS_ACTION_TYPE:
			return {
				...previousState,
				byId: {
					...previousState.byId,
					...action.payload.posts.reduce(
						(posts, post) => ({
							...posts,
							[post.id]: {
								...post,
							},
						}),
						{},
					),
				},
				allIds: [
					...action.payload.posts.reduce(
						(allIds, post) => [...allIds, post.id],
						[],
					),
				],
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
			const postIdsRemaining = previousState.allIds.filter(
				postId => postId !== action.payload.id,
			);

			return {
				...previousState,
				byId: {
					...postIdsRemaining.reduce((postsById, postId) => {
						postsById[postId] = previousState.byId[postId];
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
			const { parentId, id } = action.payload;

			return {
				...previousState,
				byId: {
					...previousState.byId,
					[parentId]: {
						...previousState.byId[parentId],
						commentCount:
							previousState.byId[action.payload.parentId].commentCount + 1,
					},
				},
			};

		case actionTypes.DELETE_COMMENT_ACTION_TYPE:
			return {
				...previousState,
				byId: {
					...previousState.byId,
					[action.payload.parentId]: {
						...previousState.byId[action.payload.parentId],
						commentCount:
							previousState.byId[action.payload.parentId].commentCount - 1,
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
				parentId,
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
						parentId,
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
						timestamp: action.payload.timestamp,
					},
				},
			};

		case actionTypes.DELETE_COMMENT_ACTION_TYPE:
			const { allIds, byId } = previousState;

			const commentIdsRemaining = allIds.filter(
				commentId => commentId !== action.payload.id,
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
				commentId =>
					previousState.byId[commentId].parentId !== action.payload.id,
			);

			return {
				...previousState,
				allIds: remainingCommentIds,
				byId: {
					...remainingCommentIds.reduce(
						(remainingComments, commentId) => ({
							...remainingComments,
							[commentId]: previousState.byId[commentId],
						}),
						{},
					),
				},
			};

		case actionTypes.RECEIVE_COMMENTS_FOR_POST_ACTION_TYPE:
			return {
				...previousState,
				byId: {
					...previousState.byId,
					...action.payload.comments.reduce(
						(commentsById, comment) => ({
							...commentsById,
							[comment.id]: {
								...comment,
							},
						}),
						{},
					),
				},
				allIds: [
					...previousState.allIds,
					...action.payload.comments.reduce(
						(allCommentIds, comment) => [...allCommentIds, comment.id],
						[],
					),
				],
			};

		default:
			return previousState;
	}
}

export function general(previousState = initialState.general, action) {
	switch (action.type) {
		case actionTypes.REQUEST_ALL_POSTS_ACTION_TYPE:
		case actionTypes.REQUEST_COMMENTS_FOR_POST_ACTION_TYPE:
			return {
				...previousState,
				isLoading: true,
			};

		case actionTypes.RECEIVE_ALL_POSTS_ACTION_TYPE:
		case actionTypes.RECEIVE_COMMENTS_FOR_POST_ACTION_TYPE:
			return {
				...previousState,
				isLoading: false,
			};

		default:
			return previousState;
	}
}

export function categories(previousState = initialState.categories, action) {
	switch (action.type) {
		case actionTypes.RECEIVE_ALL_CATEGORIES_ACTION_TYPE:
			return [...previousState, ...action.payload.categories];
		default:
			return previousState;
	}
}

import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

function posts(previousState = initialState.posts, action) {
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

export default posts;

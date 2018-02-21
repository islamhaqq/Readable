import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

function comments(previousState = initialState.comments, action) {
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

export default comments;

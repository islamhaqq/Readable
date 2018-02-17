import uniqid from 'uniqid';

import * as actionTypes from './actionTypes';

export const upvotePost = postId => ({
	type: actionTypes.UPVOTE_POST_ACTION_TYPE,
	payload: {
		postId,
	},
});

export const deletePost = postId => ({
	type: actionTypes.DELETE_POST_ACTION_TYPE,
	payload: {
		postId,
	},
});

export const createPost = ({ title, author, body }) => ({
	type: actionTypes.CREATE_POST_ACTION_TYPE,
	payload: {
		id: uniqid(),
		title,
		author,
		body,
		points: 1,
		isDeleted: false,
		timestamp: Date.now(),
		comments: [],
	},
});

export const addComment = ({ author, body }) => ({
	type: actionTypes.ADD_COMMENT_ACTION_TYPE,
	payload: {
		author,
		body,
	},
});

export const deleteComment = commentId => ({
	type: actionTypes.DELETE_COMMENT_ACTION_TYPE,
	payload: {
		commentId,
	},
});

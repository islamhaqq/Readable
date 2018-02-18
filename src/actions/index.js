import uniqid from 'uniqid';

import * as actionTypes from './actionTypes';

export const upvotePost = postId => ({
	type: actionTypes.UPVOTE_POST_ACTION_TYPE,
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

export const deletePost = id => ({
	type: actionTypes.DELETE_POST_ACTION_TYPE,
	payload: {
		id,
		isDeleted: true,
	},
});

export const editPost = ({ id, title, author, body }) => ({
	type: actionTypes.EDIT_POST_ACTION_TYPE,
	payload: {
		id,
		title,
		author,
		body,
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

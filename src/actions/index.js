import uniqid from 'uniqid';

import {
	UPVOTE_POST_ACTION_TYPE,
	DELETE_POST_ACTION_TYPE,
	CREATE_POST_ACTION_TYPE,
	ADD_COMMENT_ACTION_TYPE,
	DELETE_COMMENT_ACTION_TYPE,
} from './actionTypes';

export const upvotePost = postId => ({
	type: UPVOTE_POST_ACTION_TYPE,
	payload: {
		postId,
	},
});

export const deletePost = postId => ({
	type: DELETE_POST_ACTION_TYPE,
	payload: {
		postId,
	},
});

export const createPost = ({ title, author, body }) => ({
	type: CREATE_POST_ACTION_TYPE,
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
	type: ADD_COMMENT_ACTION_TYPE,
	payload: {
		author,
		body,
	},
});

export const deleteComment = commentId => ({
	type: DELETE_COMMENT_ACTION_TYPE,
	payload: {
		commentId,
	},
});

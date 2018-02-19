import uniqid from 'uniqid';
import fetch from 'cross-fetch';

import * as actionTypes from './actionTypes';
import { apiUrl, authorizationHeaders } from '../utils/config';

const requestAllPosts = () => ({
	type: actionTypes.REQUEST_ALL_POSTS_ACTION_TYPE,
});

const receiveAllPosts = json => ({
	type: actionTypes.RECEIVE_ALL_POSTS_ACTION_TYPE,
	payload: {
		posts: json,
	},
});

export const fetchAllPosts = () => {
	return async dispatch => {
		dispatch(requestAllPosts());
		const response = await fetch(`${apiUrl}/posts`, authorizationHeaders);
		const json = await response.json();
		return dispatch(receiveAllPosts(json));
	};
};

export const createPost = ({ title, author, body }) => ({
	type: actionTypes.CREATE_POST_ACTION_TYPE,
	payload: {
		id: uniqid(),
		title,
		author,
		body,
		voteScore: 1,
		deleted: false,
		timestamp: Date.now(),
		commentCount: 0,
	},
});

export const editPost = ({ id, title, body }) => ({
	type: actionTypes.EDIT_POST_ACTION_TYPE,
	payload: {
		id,
		title,
		body,
	},
});

export const deletePost = id => ({
	type: actionTypes.DELETE_POST_ACTION_TYPE,
	payload: {
		id,
	},
});

export const upvotePost = postId => ({
	type: actionTypes.UPVOTE_POST_ACTION_TYPE,
	payload: {
		postId,
	},
});

export const downvotePost = postId => ({
	type: actionTypes.DOWNVOTE_POST_ACTION_TYPE,
	payload: {
		postId,
		deleted: true,
	},
});

const requestCommentsForPost = () => ({
	type: actionTypes.REQUEST_COMMENTS_FOR_POST_ACTION_TYPE,
});

const receiveCommentsForPost = json => ({
	type: actionTypes.RECEIVE_COMMENTS_FOR_POST_ACTION_TYPE,
	payload: {
		comments: json,
	},
});

export const fetchCommentsForPost = postId => {
	return async dispatch => {
		dispatch(requestCommentsForPost());
		const response = await fetch(
			`${apiUrl}/posts/${postId}/comments`,
			authorizationHeaders,
		);
		const json = await response.json();
		return dispatch(receiveCommentsForPost(json));
	};
};

export const addComment = ({ id, parentId, author, body }) => ({
	type: actionTypes.ADD_COMMENT_ACTION_TYPE,
	payload: {
		id,
		parentId,
		author,
		body,
		voteScore: 1,
		deleted: false,
		timestamp: Date.now(),
	},
});

export const editComment = ({ id, body }) => ({
	type: actionTypes.EDIT_COMMENT_ACTION_TYPE,
	payload: {
		id,
		body,
	},
});

export const deleteComment = ({ id, postId }) => ({
	type: actionTypes.DELETE_COMMENT_ACTION_TYPE,
	payload: {
		postId,
		id,
	},
});

export const upvoteComment = commentId => ({
	type: actionTypes.UPVOTE_COMMENT_ACTION_TYPE,
	payload: {
		commentId,
	},
});

export const downvoteComment = commentId => ({
	type: actionTypes.DOWNVOTE_COMMENT_ACTION_TYPE,
	payload: {
		commentId,
	},
});

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

export const createPost = ({ title, author, body, category }) => {
	return async dispatch => {
		const requestBody = {
			id: uniqid(),
			title,
			author,
			body,
			timestamp: Date.now(),
			category,
		};

		const response = await fetch(`${apiUrl}/posts`, {
			method: 'post',
			...authorizationHeaders,
			body: JSON.stringify(requestBody),
		});
		const json = await response.json();
		return dispatch(createCreatePostAction(json));
	};
};

const createCreatePostAction = newPostData => ({
	type: actionTypes.CREATE_POST_ACTION_TYPE,
	payload: {
		...newPostData,
	},
});

export const editPost = ({ id, title, body }) => {
	return async dispatch => {
		const requestBody = {
			title,
			body,
		};

		const response = await fetch(`${apiUrl}/posts/${id}`, {
			method: 'put',
			...authorizationHeaders,
			body: JSON.stringify(requestBody),
		});
		const json = await response.json();
		return dispatch(createEditPostAction(json));
	};
};

const createEditPostAction = ({ id, title, body }) => ({
	type: actionTypes.EDIT_POST_ACTION_TYPE,
	payload: {
		id,
		title,
		body,
	},
});

export const deletePost = postId => {
	return async dispatch => {
		const response = await fetch(`${apiUrl}/posts/${postId}`, {
			method: 'delete',
			...authorizationHeaders,
		});
		const { id } = await response.json();
		return dispatch(createDeletePostAction(id));
	};
};

const createDeletePostAction = id => ({
	type: actionTypes.DELETE_POST_ACTION_TYPE,
	payload: {
		id,
	},
});

export const upvotePost = postId => {
	return async dispatch => {
		const requestBody = {
			option: 'upVote',
		};

		const response = await fetch(`${apiUrl}/posts/${postId}`, {
			method: 'post',
			...authorizationHeaders,
			body: JSON.stringify(requestBody),
		});
		const { id } = await response.json();
		return dispatch(createUpvotePostAction(id));
	};
};

export const createUpvotePostAction = postId => ({
	type: actionTypes.UPVOTE_POST_ACTION_TYPE,
	payload: {
		postId,
	},
});

export const downvotePost = postId => {
	return async dispatch => {
		const requestBody = {
			option: 'downVote',
		};

		const response = await fetch(`${apiUrl}/posts/${postId}`, {
			method: 'post',
			...authorizationHeaders,
			body: JSON.stringify(requestBody),
		});
		const { id } = await response.json();
		return dispatch(createDownvotePostAction(id));
	};
};

export const createDownvotePostAction = postId => ({
	type: actionTypes.DOWNVOTE_POST_ACTION_TYPE,
	payload: {
		postId,
		deleted: true,
	},
});

const requestCommentsForPost = () => ({
	type: actionTypes.REQUEST_COMMENTS_FOR_POST_ACTION_TYPE,
});

const receiveCommentsForPost = comments => ({
	type: actionTypes.RECEIVE_COMMENTS_FOR_POST_ACTION_TYPE,
	payload: {
		comments,
	},
});

export const fetchCommentsForPost = postId => {
	return async dispatch => {
		dispatch(requestCommentsForPost());
		const response = await fetch(
			`${apiUrl}/posts/${postId}/comments`,
			authorizationHeaders,
		);

		const comments = await response.json();
		return dispatch(receiveCommentsForPost(comments));
	};
};

export const addComment = ({ id, parentId, author, body }) => {
	return async dispatch => {
		const requestBody = {
			id,
			author,
			body,
			timestamp: Date.now(),
			parentId,
		};

		const response = await fetch(`${apiUrl}/comments`, {
			method: 'post',
			...authorizationHeaders,
			body: JSON.stringify(requestBody),
		});
		const json = await response.json();
		return dispatch(createAddCommentAction(json));
	};
};

export const createAddCommentAction = ({ id, parentId, author, body }) => ({
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

export const editComment = ({ id, body }) => {
	return async dispatch => {
		const requestBody = {
			body,
			timestamp: Date.now(),
		};

		const response = await fetch(`${apiUrl}/comments/${id}`, {
			method: 'put',
			...authorizationHeaders,
			body: JSON.stringify(requestBody),
		});
		const json = await response.json();
		return dispatch(createEditCommentAction(json));
	};
};

export const createEditCommentAction = ({ id, body, timestamp }) => ({
	type: actionTypes.EDIT_COMMENT_ACTION_TYPE,
	payload: {
		id,
		body,
		timestamp,
	},
});

export const deleteComment = ({ id, postId }) => {
	return async dispatch => {
		const response = await fetch(`${apiUrl}/comments/${id}`, {
			method: 'delete',
			...authorizationHeaders,
		});
		const json = await response.json();
		return dispatch(createDeleteCommentAction(json));
	};
};

export const createDeleteCommentAction = ({ id, parentId }) => ({
	type: actionTypes.DELETE_COMMENT_ACTION_TYPE,
	payload: {
		parentId,
		id,
	},
});

export const upvoteComment = commentId => {
	return async dispatch => {
		const requestBody = {
			option: 'upVote',
		};

		const response = await fetch(`${apiUrl}/comments/${commentId}`, {
			method: 'post',
			...authorizationHeaders,
			body: JSON.stringify(requestBody),
		});
		const { id } = await response.json();
		return dispatch(createUpvoteCommentAction(id));
	};
};

export const createUpvoteCommentAction = commentId => ({
	type: actionTypes.UPVOTE_COMMENT_ACTION_TYPE,
	payload: {
		commentId,
	},
});

export const downvoteComment = commentId => {
	return async dispatch => {
		const requestBody = {
			option: 'downVote',
		};

		const response = await fetch(`${apiUrl}/comments/${commentId}`, {
			method: 'post',
			...authorizationHeaders,
			body: JSON.stringify(requestBody),
		});
		const { id } = await response.json();
		return dispatch(createDownvoteCommentAction(id));
	};
};

export const createDownvoteCommentAction = commentId => ({
	type: actionTypes.DOWNVOTE_COMMENT_ACTION_TYPE,
	payload: {
		commentId,
	},
});

export const fetchAllCategories = () => {
	return async dispatch => {
		const response = await fetch(`${apiUrl}/categories`, authorizationHeaders);
		const { categories } = await response.json();
		return dispatch(receiveAllCategories(categories));
	};
};

const receiveAllCategories = categories => ({
	type: actionTypes.RECEIVE_ALL_CATEGORIES_ACTION_TYPE,
	payload: {
		categories,
	},
});

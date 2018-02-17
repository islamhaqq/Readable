import {
	UPVOTE_POST_ACTION_TYPE,
	CREATE_POST_ACTION_TYPE,
} from '../actions/actionTypes';
import initialState from './initialState';

export function posts(previousState = initialState, action) {
	switch (action.type) {
		case UPVOTE_POST_ACTION_TYPE:
			return {
				...previousState,
				posts: {
					byId: {
						...previousState.posts.byId,
						[action.payload.postId]: {
							...previousState.posts.byId[action.payload.postId],
							points:
								previousState.posts.byId[action.payload.postId].points + 1,
						},
					},
				},
			};

		case CREATE_POST_ACTION_TYPE:
			return {
				...previousState,
				posts: {
					...previousState.posts,
					byId: {
						...previousState.posts.byId,
						[action.payload.id]: {
							...action.payload,
						},
					},
				},
			};

		default:
			return previousState;
	}
}

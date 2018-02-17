import {
	UPVOTE_POST_ACTION_TYPE,
	CREATE_POST_ACTION_TYPE,
} from '../actions/actionTypes';
import initialState from './initialState';

export function posts(previousState = initialState.posts, action) {
	switch (action.type) {
		case UPVOTE_POST_ACTION_TYPE:
			return {
				...previousState,
				byId: {
					...previousState.byId,
					[action.payload.postId]: {
						...previousState.byId[action.payload.postId],
						points: previousState.byId[action.payload.postId].points + 1,
					},
				},
			};

		case CREATE_POST_ACTION_TYPE:
			return {
				...previousState,
				byId: {
					...previousState.byId,
					[action.payload.id]: {
						...action.payload,
					},
				},
			};

		default:
			return previousState;
	}
}

export function comments(previouState = initialState.comments, action) {
	return previouState;
}

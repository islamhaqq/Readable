import { UPVOTE_POST_ACTION_TYPE } from '../actions';
import initialState from './initialState';

export function posts(previousState = initialState, action) {
	switch (action.type) {
		case UPVOTE_POST_ACTION_TYPE:
			return Object.assign({}, previousState, {
				previousState.posts.byId[action.postId]: {
					...previousState.posts.byId[action.postId],
					points: ...previousState.posts.byId[action.postId].points + 1
				}
			});
		default:
			return previousState;
	}
}

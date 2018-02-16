import { combineReducers } from 'redux';

import { UPVOTE_POST_ACTION_TYPE } from '../actions';
import initialState from './initialState';

function posts(previousState = initialState, action) {
	return previousState;
}

const rootReducer = combineReducers({
	posts,
});

export default rootReducer;

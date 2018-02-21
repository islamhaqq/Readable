import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

function general(previousState = initialState.general, action) {
	switch (action.type) {
		case actionTypes.REQUEST_ALL_POSTS_ACTION_TYPE:
		case actionTypes.REQUEST_COMMENTS_FOR_POST_ACTION_TYPE:
			return {
				...previousState,
				isLoading: true,
			};

		case actionTypes.RECEIVE_ALL_POSTS_ACTION_TYPE:
		case actionTypes.RECEIVE_COMMENTS_FOR_POST_ACTION_TYPE:
			return {
				...previousState,
				isLoading: false,
			};

		default:
			return previousState;
	}
}

export default general;

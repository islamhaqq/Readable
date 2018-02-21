import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

function categories(previousState = initialState.categories, action) {
	switch (action.type) {
		case actionTypes.RECEIVE_ALL_CATEGORIES_ACTION_TYPE:
			return [...previousState, ...action.payload.categories];
		default:
			return previousState;
	}
}

export default categories;

import { combineReducers } from 'redux';

import * as allReducers from './allReducers';

const rootReducer = combineReducers({
	allReducers,
});

export default rootReducer;

import { combineReducers } from 'redux';

import categories from './categories';
import comments from './comments';
import general from './general';
import posts from './posts';

const rootReducer = combineReducers({
	categories,
	comments,
	general,
	posts,
});

export default rootReducer;

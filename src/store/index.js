import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';

const composeEnhancersWithReduxDevTools =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loggerMiddleware = createLogger();

const store = createStore(
	rootReducer,
	composeEnhancersWithReduxDevTools(
		applyMiddleware(thunkMiddleware, loggerMiddleware),
	),
);

export default store;

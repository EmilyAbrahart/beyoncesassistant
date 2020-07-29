/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/auth';
import dialogueReducer from './reducers/dialogue';
import gameReducer from './reducers/game';

const rootReducer = combineReducers({
	auth: authReducer,
	dialogue: dialogueReducer,
	game: gameReducer
});

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk)
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;

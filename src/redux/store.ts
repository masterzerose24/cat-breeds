import { createStore, applyMiddleware } from 'redux';
import rootReducers, {defaultState} from './reducers';
import thunk from 'redux-thunk';

const middleWares = [thunk];

const initState = defaultState;

const store = createStore(
	rootReducers,
	initState,
	applyMiddleware(...middleWares)
);

export default store;

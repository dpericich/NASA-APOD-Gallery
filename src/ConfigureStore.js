import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer, composedEnhancer);

export default store;

// store.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';

const rootReducer = combineReducers({
  loginResponse: loginReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

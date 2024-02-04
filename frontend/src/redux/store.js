import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducer } from './reducer/combineReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const initailState = {};

const meddleware = [thunk];

const store = createStore(
  combineReducer,
  initailState,
  composeWithDevTools(applyMiddleware(...meddleware)),
);

export default store;

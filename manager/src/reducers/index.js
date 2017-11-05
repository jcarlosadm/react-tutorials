import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer.js';

export default combineReducers({
  auth: AuthReducer
});

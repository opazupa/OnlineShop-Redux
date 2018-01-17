import { combineReducers } from '@ngrx/store';
import { handleActions } from 'redux-actions';

const authReducer = handleActions({
  AUTHENTICATED: (state, action) => true,
  LOGIN_FAILED: (state, action) => false,
  NOT_AUTHENTICATED: (state, action) => false
}, false);

const userReducer = handleActions({
  GET_USER_SUCCESS: (state, action) => action.payload,
  LOGIN_FAILED: (state, action) => null,
  NOT_AUTHENTICATED: (state, action) => null
}, null);

export default combineReducers({
  auth: authReducer,
  user: userReducer
});

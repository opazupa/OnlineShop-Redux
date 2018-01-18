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

export const orderDetailReducer = handleActions({
  REQUEST_ORDER_DETAIL_SUCCESS: (state, action) => action.payload,
  REQUEST_ORDERS_DETAIL_FAILED: (state, action) => null
}, null);

export const loadingReducer = handleActions({
  REQUEST_ORDER_DATAIL: (state, action) => true,
  REQUEST_ORDER_DETAIL_SUCCESS: (state, action) => false,
  REQUEST_ORDER_DETAIL_FAILED: (state, action) => false
}, false);

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  orderDetail: orderDetailReducer,
  isLoading: loadingReducer
});

import { GET_SHOPPING_CART, GET_SHOPPING_CART_FAILED, GET_SHOPPING_CART_SUCCESS } from '@app/core/core.actions';
import {
  REQUEST_ORDER_DETAIL,
  REQUEST_ORDER_DETAIL_FAILED,
  REQUEST_ORDER_DETAIL_SUCCESS,
} from '@app/features/shopping/shopping.actions';
import { combineReducers } from '@ngrx/store';
import { combineActions, handleActions } from 'redux-actions';

import { notificationsReducer } from './notifications.reducer';
import { shoppingCartReducer } from './shopping-cart.reducer';

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
  [combineActions(REQUEST_ORDER_DETAIL, GET_SHOPPING_CART)]: (state, action) => true,
  [combineActions(REQUEST_ORDER_DETAIL_SUCCESS, GET_SHOPPING_CART_SUCCESS)]: (state, action) => false,
  [combineActions(REQUEST_ORDER_DETAIL_FAILED, GET_SHOPPING_CART_FAILED)]: (state, action) => false
}, false);

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  orderDetail: orderDetailReducer,
  isLoading: loadingReducer,
  notifications: notificationsReducer,
  shoppingCart: shoppingCartReducer
});

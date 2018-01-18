import { combineReducers } from '@ngrx/store';
import { combineActions, handleActions } from 'redux-actions';

import { REQUEST_ORDERS, REQUEST_ORDERS_FAILED, REQUEST_ORDERS_SUCCESS } from '../actions';

export const ordersReducer = handleActions({
  REQUEST_ORDERS_SUCCESS: (state, action) => action.payload,
  REQUEST_ORDERS_FAILED: (state, action) => null
}, null);


export const loadingReducer = handleActions({
  [combineActions(REQUEST_ORDERS)]: (state, action) => true,
  [combineActions(REQUEST_ORDERS_SUCCESS)]: (state, action) => false,
  [combineActions(REQUEST_ORDERS_FAILED)]: (state, action) => false
}, false);

export const orderReducer = combineReducers({
  userOrders: ordersReducer,
  isLoading: loadingReducer
});

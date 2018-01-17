import { combineReducers } from '@ngrx/store';
import * as Immutable from 'immutable';
import { handleActions } from 'redux-actions';



export const orderDetailReducer = handleActions({
  REQUEST_ORDERS: (state, action) => {
    return Immutable.Map();
  },
  REQUEST_ORDERS_SUCCESS: (state, action) => Immutable.fromJS(action.payload),
  REQUEST_ORDERS_FAILED: (state, action) => Immutable.Map()
}, Immutable.Map());

export const loadingReducer = handleActions({
  REQUEST_ORDERS: (state, action) => true,
  REQUEST_ORDERS_SUCCESS: (state, action) => false,
  REQUEST_ORDERS_FAILED: (state, action) => false
}, false);

export const orderReducer = combineReducers({
  orderDetail: orderDetailReducer,
  isLoading: loadingReducer
});

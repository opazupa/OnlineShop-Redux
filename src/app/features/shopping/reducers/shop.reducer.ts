import { combineReducers } from '@ngrx/store';
import { combineActions, handleActions } from 'redux-actions';

import {
  REQUEST_OFFERS,
  REQUEST_OFFERS_FAILED,
  REQUEST_OFFERS_SUCCESS,
  REQUEST_ORDERS,
  REQUEST_ORDERS_FAILED,
  REQUEST_ORDERS_SUCCESS,
} from '../shopping.actions';

export const productReducer = handleActions({
  REQUEST_PRODUCTS_SUCCESS: (state, action) => action.payload,
  REQUEST_PRODUCTS_FAILED: (state, action) => []
}, []);

export const offerReducer = handleActions({
  REQUEST_OFFERS_SUCCESS: (state, action) => action.payload,
  REQUEST_OFFERS_FAILED: (state, action) => []
}, []);


export const loadingReducer = handleActions({
  [combineActions(REQUEST_ORDERS, REQUEST_OFFERS)]: (state, action) => true,
  [combineActions(REQUEST_ORDERS_SUCCESS, REQUEST_OFFERS_SUCCESS)]: (state, action) => false,
  [combineActions(REQUEST_ORDERS_FAILED, REQUEST_OFFERS_FAILED)]: (state, action) => false
}, false);

export const shopReducer = combineReducers({
  products: productReducer,
  offers: offerReducer,
  isLoading: loadingReducer
});

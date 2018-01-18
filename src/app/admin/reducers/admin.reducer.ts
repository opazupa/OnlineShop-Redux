import { combineReducers } from '@ngrx/store';
import { combineActions, handleActions } from 'redux-actions';

import {
  REQUEST_ADMIN_ORDERS,
  REQUEST_ADMIN_ORDERS_FAILED,
  REQUEST_ADMIN_ORDERS_SUCCESS,
  REQUEST_ADMIN_PRODUCTS,
  REQUEST_ADMIN_PRODUCTS_FAILED,
  REQUEST_ADMIN_PRODUCTS_SUCCESS,
} from './../admin.actions';



const adminOrdersReducer = handleActions({
  REQUEST_ADMIN_ORDERS_SUCCESS: (state, action) => action.payload,
  REQUEST_ADMIN_ORDERS_FAILED: (state, action) => []
}, []);

const adminProductsReducer = handleActions({
  REQUEST_ADMIN_PRODUCTS_SUCCESS: (state, action) => action.payload,
  REQUEST_ADMIN_PRODUCTS_FAILED: (state, action) => []
}, []);

const selectedProductReducer = handleActions({
  REQUEST_SINGLE_PRODUCT: (state, action) => null,
  REQUEST_SINGLE_PRODUCT_SUCCESS: (state, action) => action.payload,
  REQUEST_SINGLE_PRODUCT_FAILED: (state, action) => null
}, []);

export const loadingReducer = handleActions({
  [combineActions(REQUEST_ADMIN_ORDERS, REQUEST_ADMIN_PRODUCTS)]: (state, action) => true,
  [combineActions(REQUEST_ADMIN_ORDERS_SUCCESS, REQUEST_ADMIN_PRODUCTS_SUCCESS)]: (state, action) => false,
  [combineActions(REQUEST_ADMIN_ORDERS_FAILED, REQUEST_ADMIN_PRODUCTS_FAILED)]: (state, action) => false
}, false);

export default combineReducers({
  orders: adminOrdersReducer,
  products: adminProductsReducer,
  selectedProduct: selectedProductReducer,
  isLoading: loadingReducer
});

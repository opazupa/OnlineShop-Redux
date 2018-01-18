import { createAction } from 'redux-actions';

export const REQUEST_ORDERS = createAction('REQUEST_ORDERS');
export const REQUEST_ORDERS_FAILED = createAction('REQUEST_ORDERS_FAILED');
export const REQUEST_ORDERS_SUCCESS = createAction('REQUEST_ORDERS_SUCCESS');

export const REQUEST_ORDER_DETAIL = createAction('REQUEST_ORDER_DETAIL');
export const REQUEST_ORDER_DETAIL_FAILED = createAction('REQUEST_ORDER_DETAIL_FAILED');
export const REQUEST_ORDER_DETAIL_SUCCESS = createAction('REQUEST_ORDER_DETAIL_SUCCESS');

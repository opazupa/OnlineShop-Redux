import { createAction } from 'redux-actions';

export const LOGIN = createAction('LOGIN');
export const LOGIN_SUCCESS = createAction('LOGIN_SUCCESS');
export const LOGIN_FAILED = createAction('LOGIN_FAILED');

export const LOGOUT = createAction('LOGOUT');
export const LOGOUT_SUCCESS = createAction('LOGOUT_SUCCESS');
export const LOGOUT_FAILED = createAction('LOGOUT_FAILED');

export const GET_USER = createAction('GET_USER');
export const GET_USER_SUCCESS = createAction('GET_USER_SUCCESS');
export const GET_USER_FAILED = createAction('GET_USER_FAILED');

export const AUTHENTICATED = createAction('AUTHENTICATED');
export const NOT_AUTHENTICATED = createAction('NOT_AUTHENTICATED');
export const PERMISSION_DENIED = createAction('PERMISSION_DENIED');

export const CLEAR_NOTIFICATIONS = createAction('CLEAR_NOTIFICATIONS');

export const GET_SHOPPING_CART = createAction('GET_SHOPPING_CART');
export const GET_SHOPPING_CART_FAILED = createAction('GET_SHOPPING_CART_FAILED');
export const GET_SHOPPING_CART_SUCCESS = createAction('GET_SHOPPING_CART_SUCCESS');


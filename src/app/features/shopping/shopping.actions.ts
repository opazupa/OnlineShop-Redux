import { createAction } from 'redux-actions';

export const REQUEST_ORDERS = createAction('REQUEST_ORDERS');
export const REQUEST_ORDERS_FAILED = createAction('REQUEST_ORDERS_FAILED');
export const REQUEST_ORDERS_SUCCESS = createAction('REQUEST_ORDERS_SUCCESS');

export const REQUEST_ORDER_DETAIL = createAction('REQUEST_ORDER_DETAIL');
export const REQUEST_ORDER_DETAIL_FAILED = createAction('REQUEST_ORDER_DETAIL_FAILED');
export const REQUEST_ORDER_DETAIL_SUCCESS = createAction('REQUEST_ORDER_DETAIL_SUCCESS');

export const REQUEST_PRODUCTS = createAction('REQUEST_PRODUCTS');
export const REQUEST_PRODUCTS_FAILED = createAction('REQUEST_PRODUCTS_FAILED');
export const REQUEST_PRODUCTS_SUCCESS = createAction('REQUEST_PRODUCTS_SUCCESS');

export const REQUEST_OFFERS = createAction('REQUEST_OFFERS');
export const REQUEST_OFFERS_FAILED = createAction('REQUEST_OFFERS_FAILED');
export const REQUEST_OFFERS_SUCCESS = createAction('REQUEST_OFFERS_SUCCESS');

export const REQUEST_CATEGORIES = createAction('REQUEST_CATEGORIES');
export const REQUEST_CATEGORIES_FAILED = createAction('REQUEST_CATEGORIES_FAILED');
export const REQUEST_CATEGORIES_SUCCESS = createAction('REQUEST_CATEGORIES_SUCCESS');

export const PLACE_ORDER = createAction('PLACE_ORDER');
export const PLACE_ORDER_FAILED = createAction('PLACE_ORDER_FAILED');
export const PLACE_ORDER_SUCCESS = createAction('PLACE_ORDER_SUCCESS');

export const CREATE_SHOPPING_CART = createAction('CREATE_SHOPPING_CART');
export const CREATE_SHOPPING_CART_FAILED = createAction('CREATE_SHOPPING_CART_FAILED');
export const CREATE_SHOPPING_CART_SUCCESS = createAction('CREATE_SHOPPING_CART_SUCCESS');

export const ADD_TO_SHOPPING_CART = createAction('ADD_TO_SHOPPING_CART');
export const ADD_TO_SHOPPING_CART_FAILED = createAction('ADD_TO_SHOPPING_CART_FAILED');
export const ADD_TO_SHOPPING_CART_SUCCESS = createAction('ADD_TO_SHOPPING_CART_SUCCESS');

export const REMOVE_FROM_SHOPPING_CART = createAction('REMOVE_FROM_SHOPPING_CART');
export const REMOVE_FROM_SHOPPING_CART_FAILED = createAction('REMOVE_FROM_SHOPPING_CART_FAILED');
export const REMOVE_FROM_SHOPPING_CART_SUCCESS = createAction('REMOVE_FROM_SHOPPING_CART_SUCCESS');

export const CLEAR_SHOPPING_CART = createAction('CLEAR_SHOPPING_CART');
export const CLEAR_SHOPPING_CART_FAILED = createAction('CLEAR_SHOPPING_CART_FAILED');
export const CLEAR_SHOPPING_CART_SUCCESS = createAction('CLEAR_SHOPPING_CART_SUCCESS');

export const CHECKOUT = createAction('CHECKOUT');
export const CHECKOUT_FAILED = createAction('CHECKOUT_FAILED');
export const CHECKOUT_SUCCESS = createAction('CHECKOUT_SUCCESS');

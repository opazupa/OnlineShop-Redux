import { handleActions } from 'redux-actions';

export const shoppingCartReducer = handleActions({
  REQUEST_ORDERS_SUCCESS: (state, action) => action.payload,
  REQUEST_ORDERS_FAILED: (state, action) => null
}, null);

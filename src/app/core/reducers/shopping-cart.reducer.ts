import { handleActions } from 'redux-actions';

export const shoppingCartReducer = handleActions({
  CLEAR_SHOPPIMG_CART_SUCCESS: (state, action) => {
    console.log(state);
    console.log(action);
  },
  GET_SHOPPING_CART_SUCCESS: (state, action) => action.payload,
  GET_SHOPPING_CART_FAILED: (state, action) => null
}, null);
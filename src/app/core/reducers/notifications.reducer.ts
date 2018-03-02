import { Notification } from '@app/shared/models';
import { handleActions } from 'redux-actions';

// TODO
export const notificationsReducer = handleActions({
  // SUCCESS MESSAGES -->
  CLEAR_SHOPPING_CART_SUCCESS: (state, action) => {
    const toast: Notification = {
      type: 'success',
      message: 'Shopping cart cleared'
    };
    return toast;
  },
  AUTHENTICATED: (state, action) => {
    const toast: Notification = {
      type: 'success',
      message: 'Logged in!'
    };
    return toast;
  },
  LOGOUT_SUCCESS: (state, action) => {
    const toast: Notification = {
      type: 'success',
      message: 'Logged out!'
    };
    return toast;
  },
  PLACE_ORDER_SUCCESS: (state, action) => {
    const toast: Notification = {
      type: 'success',
      message: 'Order placed successfully!'
    };
    return toast;
  },
  UPDATE_PRODUCT_SUCCESS: (state, action) => {
    const toast: Notification = {
      type: 'success',
      message: 'Item saved!'
    };
    return toast;
  },
  NOT_AUTHENTICATED: (state, action) => {
    const toast: Notification = {
      type: 'success',
      message: 'Logged out!'
    };
    return toast;
  },
  // ERROR MESSAGES -->
  PLACE_ORDER_FAILED: (state, action) => {
    const toast: Notification = {
      type: 'error',
      message: 'Error while placing your order'
    };
    return toast;
  },
  LOGIN_FAILED: (state, action) => {
    const toast: Notification = {
      type: 'succerroress',
      message: 'Login failed!'
    };
    return toast;
  },
  UPDATE_PRODUCT_FAILED: (state, action) => {
    const toast: Notification = {
      type: 'error',
      message: 'Failed to save item!'
    };
    return toast;
  },
  LOGOUT_FAILED: (state, action) => {
    const toast: Notification = {
      type: 'error',
      message: 'Logout failed!'
    };
    return toast;
  },
  PERMISSION_DENIED: (state, action) => {
    const toast: Notification = {
      type: 'error',
      message: 'Not allowed!'
    };
    return toast;
  },
  CLEAR_NOTIFICATIONS: (state, action) => null
}, null);

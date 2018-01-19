import { Notification } from '@app/shared/models';
import { handleActions } from 'redux-actions';


export const notificationsReducer = handleActions({
  REQUEST_ADMIN_ORDERS: (state, action) => {
    const toast: Notification = {
      type: 'success',
      title: 'hei',
      message: 'moi'
    };
    return toast;
  },
  REQUEST_ORDERS: (state, action) => {
    const toast: Notification = {
      type: 'error',
      title: 'hei',
      message: 'moi'
    };
    return toast;
  },
  NOT_AUTHENTICATED: (state, action) => null
}, null);

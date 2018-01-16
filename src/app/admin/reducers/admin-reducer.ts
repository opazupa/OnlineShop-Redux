import { combineReducers } from '@ngrx/store';
import { handleActions } from 'redux-actions';



const reducer = handleActions({
  REQUEST_ORDERS: (state, action) => {
    return true;
  }
}, false);

export const adminReducer = combineReducers({
  admin: reducer
});

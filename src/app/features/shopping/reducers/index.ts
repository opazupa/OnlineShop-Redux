import { combineReducers } from '@ngrx/store/src/utils';

import { orderReducer } from './order.reducer';

export const INITIAL_STATE = {
  orders: {}
};

export default combineReducers({
  orders: orderReducer
});

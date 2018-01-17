import { combineReducers } from '@ngrx/store/src/utils';

import { orderReducer } from './order.reducer';

export default combineReducers({
  orders: orderReducer
});

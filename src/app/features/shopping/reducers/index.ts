import { combineReducers } from '@ngrx/store/src/utils';

import { categoryReducer } from './category.reducer';
import { orderReducer } from './order.reducer';
import { shopReducer } from './shop.reducer';

export default combineReducers({
  shop: shopReducer,
  orders: orderReducer,
  categories: categoryReducer
});

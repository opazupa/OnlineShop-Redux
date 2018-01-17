import { combineReducers } from '@ngrx/store/src/utils';

import { adminReducer } from './admin.reducer';

export default combineReducers({
  admin: adminReducer
});

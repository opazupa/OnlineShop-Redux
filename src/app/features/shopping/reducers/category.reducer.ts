import { handleActions } from 'redux-actions';

export const categoryReducer = handleActions({
  REQUEST_CATEGORIES_SUCCESS: (state, action) => action.payload,
  REQUEST_CATEGORIES_FAILED: (state, action) => []
}, []);



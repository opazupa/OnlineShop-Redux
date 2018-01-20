import { environment } from '@env/environment';
import { ActionReducer, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { localStorageSync } from 'ngrx-store-localstorage';

// Sync states with localstorage and rehydrate on startup
function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['core', 'shopping', 'admin'], rehydrate: true })(reducer);
}
export const metaReducers: Array<MetaReducer<any, any>> = !environment.production ?
  [localStorageSyncReducer, storeFreeze] : [localStorageSyncReducer];

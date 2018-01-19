import { environment } from '@env/environment';
import { MetaReducer, ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { storeFreeze } from 'ngrx-store-freeze';

// Sync states with localstorage and rehydrate on startup
function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['core', 'shopping', 'admin'], rehydrate: true })(reducer);
}
export const metaReducers: Array<MetaReducer<any, any>> = !environment.production ?
  [localStorageSyncReducer, storeFreeze] : [localStorageSyncReducer];

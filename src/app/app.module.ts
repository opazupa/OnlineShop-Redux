import { registerLocaleData } from '@angular/common';
import localeFi from '@angular/common/locales/fi';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToasterModule } from 'angular2-toaster';
import { AngularFireModule } from 'angularfire2';
import { storeFreeze } from 'ngrx-store-freeze';
import { localStorageSync } from 'ngrx-store-localstorage';

import { CoreEffects } from './core/core.effects';
import coreReducer from './core/core.reducers';

registerLocaleData(localeFi, 'fi');

// Sync states with localstorage and rehydrate on startup
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['core', 'shopping', 'admin'], rehydrate: true })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = !environment.production ?
 [localStorageSyncReducer, storeFreeze] : [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.fireBase),
    SharedModule,
    CoreModule,
    AppRoutingModule,
    ToasterModule,
    StoreModule.forRoot({ core: coreReducer }, { metaReducers }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CoreEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

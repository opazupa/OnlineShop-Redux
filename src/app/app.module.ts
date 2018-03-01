import { registerLocaleData } from '@angular/common';
import localeFi from '@angular/common/locales/fi';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { CoreModule } from '@app/core';
import { CoreEffects, ShoppingCartEffects } from '@app/core/effects';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AngularFireModule } from 'angularfire2';
import { ToastrModule } from 'ngx-toastr';

import coreReducer from './core/reducers/core.reducers';
import { metaReducers } from './store';

registerLocaleData(localeFi, 'fi');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.fireBase),
    CoreModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({ core: coreReducer }, { metaReducers }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CoreEffects, ShoppingCartEffects]),
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

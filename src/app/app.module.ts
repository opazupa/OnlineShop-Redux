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
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AngularFireModule } from 'angularfire2';
import { ToastrModule } from 'ngx-toastr';

import { CoreEffects } from './core/core.effects';
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
    SharedModule,
    CoreModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({ core: coreReducer }, { metaReducers }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CoreEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

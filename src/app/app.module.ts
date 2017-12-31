import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { registerLocaleData } from '@angular/common';
import localeFi from '@angular/common/locales/fi';
import { ToasterModule, ToasterContainerComponent } from 'angular2-toaster';

import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core';
import { environment } from '@env/environment';
import { SharedModule } from '@app/shared';

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
    ToasterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

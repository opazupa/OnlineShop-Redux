import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AnimatedToggleComponent } from './components/animated-toggle/animated-toggle.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginModalComponent } from './components/login/login-modal/login-modal.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotificationService } from './services/notification.service';


@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    NgxDatatableModule
  ],
  exports: [NavigationComponent, FooterComponent],
  declarations: [
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    AnimatedToggleComponent,
    LoginModalComponent
  ],
  providers: [NotificationService],
  entryComponents: [LoginModalComponent]
})
export class CoreModule { }

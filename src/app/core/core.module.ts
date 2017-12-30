import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AnimatedToggleComponent } from './components/animated-toggle/animated-toggle.component';
import { LoginModalComponent } from './components/login/login-modal/login-modal.component';


@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    NgxDatatableModule
  ],
  exports: [NavigationComponent, FooterComponent],
  declarations: [FooterComponent, NavigationComponent, HomeComponent, LoginComponent, AnimatedToggleComponent, LoginModalComponent],
  providers: [],
  entryComponents: [LoginModalComponent]
})
export class CoreModule { }

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [NavigationComponent, FooterComponent],
  declarations: [FooterComponent, NavigationComponent, HomeComponent, LoginComponent],
  providers: []
})
export class CoreModule { }

import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MaterialModule
  ],
  exports: [FooterComponent, NavigationComponent, HeaderComponent],
  declarations: [FooterComponent, NavigationComponent, HeaderComponent, DashboardComponent],
  providers: []
})
export class CoreModule { }

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared';
import { DataTableModule } from 'angular-4-data-table/dist';


@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    DataTableModule
  ],
  exports: [FooterComponent, NavigationComponent, HeaderComponent],
  declarations: [FooterComponent, NavigationComponent, HeaderComponent, DashboardComponent],
  providers: []
})
export class CoreModule { }

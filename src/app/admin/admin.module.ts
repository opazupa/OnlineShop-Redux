import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { SharedModule } from '@app/shared';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    NgxDatatableModule
  ],
  declarations: [AdminProductsComponent, AdminOrdersComponent, ProductFormComponent],
  providers: [AdminAuthGuard]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { AdminAuthGuard } from './services/admin-auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminProductsComponent, AdminOrdersComponent],
  providers: [AdminAuthGuard]
})
export class AdminModule { }

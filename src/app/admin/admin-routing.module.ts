import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailComponent } from '@app/shared/components/order-detail/order-detail.component';
import { AuthGuard } from '@app/shared/services';

import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';


export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full', canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'products/new', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'products/:id', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'orders/:orderId', component: OrderDetailComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'products', component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuard] }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class AdminRoutingModule { }

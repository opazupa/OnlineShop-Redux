import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AuthGuard } from '@app/shared/services';
import { AdminAuthGuard } from './services/admin-auth-guard.service';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' , canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'products',  component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuard]}
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

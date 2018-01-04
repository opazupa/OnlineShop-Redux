import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffersComponent } from '@app/features/shopping/components/offers/offers.component';
import { OrderDetailComponent } from '@app/shared/components/order-detail/order-detail.component';

import { AuthGuard } from '../../shared/services';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products' },
  { path: 'order-success/:orderId', component: OrderSuccessComponent, canActivate: [AuthGuard] },
  { path: 'my-orders/:orderId', component: OrderDetailComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductsComponent },
  { path: 'offers', component: OffersComponent, data: { animation: 'shop' } },
  { path: 'shopping-cart', component: ShoppingCartComponent, data: { animation: 'shop' } },
  { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] }
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
export class ShoppingRoutingModule { }

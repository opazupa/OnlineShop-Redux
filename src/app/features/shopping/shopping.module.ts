import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    SharedModule
  ],
  declarations: [ProductsComponent, ShoppingCartComponent,
    CheckOutComponent, OrderSuccessComponent, MyOrdersComponent, ProductFilterComponent]
})
export class ShoppingModule { }

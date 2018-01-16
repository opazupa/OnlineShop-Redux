import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AdminRoutingModule } from '../admin/admin-routing.module';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminEffects } from './effects';
import reducers from './reducers';
import { AdminAuthGuard } from './services/admin-auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    StoreModule.forFeature('admin', reducers, {}),
    EffectsModule.forFeature([AdminEffects])
  ],
  declarations: [AdminProductsComponent, AdminOrdersComponent, ProductFormComponent],
  providers: [AdminAuthGuard]
})
export class AdminModule { }

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { ErrorBoxComponent } from './components/error-box/error-box.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { OrderService } from './services/order.service';
import { OrderDetailComponent } from '@app/shared/components/order-detail/order-detail.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NotificationService } from './services/notification.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    NgxDatatableModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot().ngModule,
    NgxDatatableModule,
    ErrorBoxComponent,
    SpinnerComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    OrderDetailComponent
  ],
  declarations: [ErrorBoxComponent, SpinnerComponent, ProductCardComponent, ProductQuantityComponent, OrderDetailComponent],
  providers: [AuthService, AuthGuard, UserService, CategoryService, ProductService, ShoppingCartService, OrderService, NotificationService]
})
export class SharedModule { }

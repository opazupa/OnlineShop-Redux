import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderDetailComponent } from '@app/shared/components/order-detail/order-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ErrorBoxComponent } from './components/error-box/error-box.component';
import { FormComponent } from './components/forms/form/form.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DebounceClickDirective } from './directives/debounce-click.directive';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { NotificationService } from './services/notification.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    NgxDatatableModule,

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
    OrderDetailComponent,
    DebounceClickDirective
  ],
  declarations: [
    ErrorBoxComponent,
    SpinnerComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    OrderDetailComponent,
    FormComponent,
    DebounceClickDirective
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
    NotificationService]
})
export class SharedModule { }

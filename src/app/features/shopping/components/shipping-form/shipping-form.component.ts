import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PLACE_ORDER } from '@app/features/shopping/shopping.actions';
import { FormComponent } from '@app/shared/components';
import { Order, ShippingInformation, ShoppingCart } from '@app/shared/models';
import { AuthService, OrderService } from '@app/shared/services';
import { Store } from '@ngrx/store';
import { CustomValidators } from 'ng2-validation';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'lw-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent extends FormComponent implements OnInit, OnDestroy {

  @Input('shopping-cart')
  cart: ShoppingCart;
  subscription: Subscription;
  userId: string;

  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private auth: AuthService,
    private orderService: OrderService,
    private router: Router) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required, Validators.min(0)])],
      city: ['', Validators.required],
      zipCode: ['', Validators.compose([Validators.required, CustomValidators.number])],
      additionalInfo: ['']
    });

    this.subscription = this.auth.user$.subscribe(u => this.userId = u.uid);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  placeOrder() {
    const order = new Order(this.userId, this.form.value as ShippingInformation, this.cart);
    this.store.dispatch(PLACE_ORDER(order));
  }


}

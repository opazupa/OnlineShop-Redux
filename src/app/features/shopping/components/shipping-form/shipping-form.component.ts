import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order, ShippingInformation, ShoppingCart } from '@app/shared/models';
import { AuthService, OrderService } from '@app/shared/services';
import { CustomValidators } from 'ng2-validation';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'lw-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent implements OnInit, OnDestroy {

  @Input('shopping-cart')
  cart: ShoppingCart;
  shippingForm: FormGroup;
  subscription: Subscription;
  userId: string;

  constructor(private fb: FormBuilder,
    private auth: AuthService,
    private orderService: OrderService,
    private router: Router) { }

  ngOnInit() {
    this.shippingForm = this.fb.group({
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


  async placeOrder() {
    const order = new Order(this.userId, this.shippingForm.value as ShippingInformation, this.cart);
    console.log(order);

    const result = await this.orderService.placeOrder(order);
    this.router.navigate(['/shop/order-success/', result.key]);
  }

  isFormUntouched(): boolean {
    return this.shippingForm.pristine;
  }

  getFormControlValue(controlName: string) {
    const control = this.shippingForm.get(controlName);

    return control.value || '';
  }

  validateFormControl(controlName: string) {
    const control = this.shippingForm.get(controlName);
    return control.invalid && control.touched;
  }

  isFormEmpty(): Boolean {
    let result = true;
    Object.keys(this.shippingForm.controls).forEach(key => {
      if (this.shippingForm.get(key).value !== undefined && !this.shippingForm.get(key).errors) {
        result = false;
      }
    });
    return result;
  }
}

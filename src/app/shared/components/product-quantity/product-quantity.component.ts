import { Component, Input } from '@angular/core';
import { ADD_TO_SHOPPING_CART, REMOVE_FROM_SHOPPING_CART } from '@app/features/shopping/shopping.actions';
import { Product } from '@app/shared/models';
import { Store } from '@ngrx/store';

import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'lw-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss']
})
export class ProductQuantityComponent {

  @Input('product')
  product: Product;
  @Input('shopping-cart')
  shoppingCart;

  constructor(private cartService: ShoppingCartService, private store: Store<any>) { }

  addToCart(): void {
    this.store.dispatch(ADD_TO_SHOPPING_CART(this.product));
    this.cartService.addToCart(this.product);
  }

  removeFromCart(): void {
    this.store.dispatch(REMOVE_FROM_SHOPPING_CART(this.product));
    this.cartService.removeFromCart(this.product);
  }

}

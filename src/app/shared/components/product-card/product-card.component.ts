import { Component, Input } from '@angular/core';
import { ADD_TO_SHOPPING_CART } from '@app/features/shopping/shopping.actions';
import { Store } from '@ngrx/store';

import { Product } from '../../models';

@Component({
  selector: 'lw-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input('product')
  product: Product;
  @Input('show-actions')
  showActions = true;
  @Input('show-category')
  showCategory = true;
  @Input('shopping-cart')
  shoppingCart;

  constructor(private store: Store<any>) { }

  addToCart(): void {
    this.store.dispatch(ADD_TO_SHOPPING_CART(this.product));
  }
}

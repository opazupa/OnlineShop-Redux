import { Component, Input } from '@angular/core';
import { ShoppingCartService } from '@app/shared/services';

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

  constructor(private cartService: ShoppingCartService) { }

  addToCart(): void {
    this.cartService.addToCart(this.product);
  }
}

import { Product } from '@app/shared/models';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lw-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss']
})
export class ProductQuantityComponent {

  @Input('product')
  product: Product;
  // tslint:disable-next-line:no-input-rename
  // tslint:disable-next-line:no-input-rename
  @Input('shopping-cart')
  shoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart(): void {
    this.cartService.addToCart(this.product);
  }

  removeFromCart(): void {
    this.cartService.removeFromCart(this.product);
  }

}

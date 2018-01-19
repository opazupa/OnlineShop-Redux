import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '@app/shared/models';
import { ShoppingCartService } from '@app/shared/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lw-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cart$: Observable<ShoppingCart>;

  constructor(private cartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}

import { Component, OnInit } from '@angular/core';
import { CLEAR_SHOPPING_CART } from '@app/features/shopping/shopping.actions';
import { ShoppingCart } from '@app/shared/models';
import { ShoppingCartService } from '@app/shared/services';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lw-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cart$: Observable<ShoppingCart>;

  constructor(private cartService: ShoppingCartService,
    private store: Store<any>, ) { }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }

  clearCart(): void {
    this.store.dispatch(CLEAR_SHOPPING_CART());
    this.cartService.clearCart();
  }
}

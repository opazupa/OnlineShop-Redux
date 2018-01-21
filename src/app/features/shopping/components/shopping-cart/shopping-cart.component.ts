import { Component, OnInit } from '@angular/core';
import { CLEAR_SHOPPING_CART } from '@app/features/shopping/shopping.actions';
import { routerTransition } from '@app/shared/animations';
import { ShoppingCart } from '@app/shared/models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lw-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  animations: [routerTransition]
})
export class ShoppingCartComponent implements OnInit {

  cart$: Observable<ShoppingCart>;
  isLoading$: Observable<Boolean>;
  constructor(private store: Store<any>, ) { }

  ngOnInit() {
    this.cart$ = this.store.select('core', 'shoppingCart');
    this.isLoading$ = this.store.select('core', 'isLoading');

  }
  clearCart(): void {
    this.store.dispatch(CLEAR_SHOPPING_CART());
  }
}

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { Product, ShoppingCart } from '@app/shared/models';
import { Store } from '@ngrx/store';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingCartService {

  cartId: string;
  constructor(private db: AngularFireDatabase, private store: Store<any>) {
    this.store.select('core', 'shoppingCart').filter(Boolean).subscribe(cart => this.cartId = cart.cartId);
  }

  getCart(): Observable<ShoppingCart> {

    const cart$ = this.getOrCreateCart().switchMap((cartId) =>
      this.db.object('/shopping-carts/' + this.cartId).valueChanges() as Observable<any>);
    return cart$.map((cart: any) => new ShoppingCart(cart.items, this.cartId));

  }

  addToCart(product: Product) {
    return Observable.of(this.updateItem(product, 1));
  }

  removeFromCart(product: Product) {
    return Observable.of(this.updateItem(product, -1));
  }

  clearCart(): Observable<any> {
    return Observable.fromPromise(this.db.object('/shopping-carts/' + this.cartId + '/items').remove());
  }

  private getOrCreateCart() {
    if (!this.cartId) {
      this.cartId = this.db.list('/shopping-carts').push({
        dateCreated: new Date().getTime()
      }).key;
    }
    return Observable.of(this.cartId);
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }


  private updateItem(product: Product, change: number) {
    const item$ = this.getItem(this.cartId, product.key);
    item$.snapshotChanges().take(1).subscribe(item => {

      const quantity = (item.payload.val() ? item.payload.val().quantity : 0) + change;

      if (quantity === 0) {
        item$.remove();
      } else {

        item$.update({
          title: product.title,
          imageUrl: product.imageUrl,
          price: product.price,
          quantity: quantity
        });
      }
    });
  }
}

import { Product } from '@app/shared/models';

import { ShoppingCartItem } from './shopping-cart-item.model';

export class ShoppingCart {

  items: ShoppingCartItem[] = [];
  cartId: string;


  constructor(private itemsMap: { [key: string]: ShoppingCartItem }, cartId: string) {
    this.itemsMap = itemsMap || {};
    this.cartId = cartId;

    for (const productId in itemsMap) {

      this.items.push(
        new ShoppingCartItem({
          ...itemsMap[productId],
          key: productId
        }));
    }
  }

  get totalItemsCount(): number {
    let count = 0;
    for (const productId in this.itemsMap) {
      count += this.itemsMap[productId].quantity;
    }
    return count;
  }

  get totalPrice(): number {
    let sum = 0;
    this.items.forEach(item => sum += item.totalPrice);
    return sum;
  }

  get isEmpty(): boolean {
    return this.items.length === 0;
  }

  getQuantity(product: Product): number {
    const item = this.itemsMap[product.key];
    return item ? item.quantity : 0;
  }
}
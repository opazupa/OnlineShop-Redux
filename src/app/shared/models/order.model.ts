import { ShoppingCart } from './shopping-cart.model';
import { OrderItem } from './order-item.model';
import { ShippingInformation } from './shipping.model';

export class Order {
  key: string;
  datePlaced: number;
  items: OrderItem[] = [];

  
  constructor(public userId?: string, public shipping?: ShippingInformation, shoppingCart?: ShoppingCart) {
    this.datePlaced = new Date().getTime();

     this.items = shoppingCart ? shoppingCart.items.map(item => {
        return new OrderItem(item);
      }) : [];
  }
  

  get totalItemsCount(): number {
    let count = 0;
    this.items.forEach(item => count += item.quantity);
    return count;
  }

  get totalPrice(): number {
    let sum = 0;
    this.items.forEach(item => sum += item.totalPrice);
    return sum;
  }
}
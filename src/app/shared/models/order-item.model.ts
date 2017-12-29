import { Product } from './product.model';
import { ShoppingCartItem } from './shopping-cart-item.model';

export class OrderItem {
  product: Product = {};
  quantity: number;
  totalPrice: number;

  constructor(item: ShoppingCartItem){
    this.product.title = item.title;
    this.product.imageUrl = item.imageUrl;
    this.product.price = item.price;
    this.quantity = item.quantity;
    this.totalPrice = item.totalPrice;
  }
}
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartService } from './shopping-cart.service';
import { Order } from '../models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { NotificationService } from './notification.service';

@Injectable()
export class OrderService {

  constructor(
    private db: AngularFireDatabase,
    private cartService: ShoppingCartService,
    private notificationService: NotificationService) { }


  async placeOrder(order: Order) {
    const result = await this.db.list('/orders/').push(order)
      .then((r) => {
        this.notificationService.popSuccessToast('Order placed successfully');
        return r;
      });
    this.cartService.clearCart();
    return result;
  }

  getOrders(): Observable<Order[]> {
    return this.db.list('/orders').snapshotChanges()
      .map(orders => {
        return orders.map(o => ({ key: o.payload.key, ...o.payload.val() }) as Order);
      });
  }

  getOrdersByUser(userId: string): Observable<Order[]> {
    const orders$ = this.db.list('/orders', o => o.orderByChild('userId').equalTo(userId)).snapshotChanges() as Observable<any>;
    return orders$.map(orders => {
      return orders.map(o => {
        const order = <Order>({ key: o.payload.key, ...o.payload.val() });
        return Object.assign(new Order(), order);
      });
    });
  }

  getOrderById(orderId: string): Observable<Order> {
    const order$ = this.db.object('/orders/' + orderId).snapshotChanges() as Observable<any>;
    return order$.map(o => {
      const order = <Order>({ key: o.payload.key, ...o.payload.val() });
      return Object.assign(new Order(), order);
    });
  }
}

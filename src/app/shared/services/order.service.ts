import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Order } from '../models';

@Injectable()
export class OrderService {

  constructor(
    private db: AngularFireDatabase,
    private router: Router) { }


  placeOrder(order: Order): Observable<Order> {
    return Observable.of(this.db.list('/orders/').push(order).key)
      .switchMap((orderId) => {
        this.router.navigate(['/shop/order-success/', orderId]);
        return this.db.object('/orders/' + orderId).snapshotChanges() as Observable<any>;
      })
      .map(o => {
        const newOrder = <Order>({ key: o.payload.key, ...o.payload.val() });
        return Object.assign(new Order(), newOrder);
      });
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

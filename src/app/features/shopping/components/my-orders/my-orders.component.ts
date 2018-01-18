import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { REQUEST_ORDER_DETAIL, REQUEST_ORDERS } from '@app/features/shopping/actions';
import { Order } from '@app/shared/models';
import { AuthService, OrderService } from '@app/shared/services';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lw-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  orders$: Observable<Order[]>;
  order: Order;
  constructor(
    private store: Store<any>,
    private auth: AuthService,
    private orderService: OrderService,
    private router: Router) {
    this.orders$ = this.store.select('shopping', 'orders', 'userOrders');
  }

  ngOnInit() {
    this.store.dispatch(REQUEST_ORDERS());
  }

  viewOrder(order: Order) {
    this.store.dispatch(REQUEST_ORDER_DETAIL(order.key));
    this.router.navigate([`/shop/my-orders/${order.key}`]);
  }
}

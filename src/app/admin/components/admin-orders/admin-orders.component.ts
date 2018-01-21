import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { REQUEST_ADMIN_ORDERS } from '@app/admin/admin.actions';
import { Order } from '@app/shared/models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lw-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {

  orders$: Observable<Order[]>;
  isLoading$: Observable<Boolean>;

  constructor(private store: Store<any>, private router: Router) {
    this.orders$ = this.store.select('admin', 'orders');
    this.isLoading$ = this.store.select('admin', 'isLoading');
  }

  ngOnInit() {
    this.store.dispatch(REQUEST_ADMIN_ORDERS());
  }

  viewOrder(order: Order) {
    this.router.navigate([`/admin/orders/${order.key}`]);
  }
}

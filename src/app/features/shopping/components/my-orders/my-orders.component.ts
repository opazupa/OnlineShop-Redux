import { Order } from '@app/shared/models';
import { Component, OnInit } from '@angular/core';
import { AuthService, OrderService } from '@app/shared/services';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';

@Component({
  selector: 'lw-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  
  orders$: Observable<Order[]>;
  order: Order;
  constructor(
    private auth: AuthService,
    private orderService: OrderService,
    private router: Router) {
    this.orderService.getOrderById('-L1WgCvZm9TKsQZXYYfG').subscribe(o => this.order = o);
    this.orders$ = this.auth.user$.switchMap(u => this.orderService.getOrdersByUser(u.uid));
  
  }

  ngOnInit() {
  }

  viewOrder(order: Order) {
    this.router.navigate([`/shop/my-orders/${order.key}`]);
  }
}

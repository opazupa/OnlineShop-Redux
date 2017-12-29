import { Router } from '@angular/router';
import { Order } from '@app/shared/models';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '@app/shared/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lw-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {

  orders$: Observable<Order[]>;

  constructor(private orderService: OrderService, private router: Router) { 
    this.orders$ = this.orderService.getOrders();
  }

  ngOnInit() {
  }

  viewOrder(order: Order) {
    this.router.navigate([`/admin/orders/${order.key}`]);
  }
}

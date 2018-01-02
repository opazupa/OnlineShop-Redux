import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { OrderService } from '../../services/order.service';
import { Order } from './../../models/order.model';

@Component({
  selector: 'lw-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  @Input('hide-return')
  hideReturn: boolean;
  orderId: string;
  order$: Observable<Order>;

  constructor(private orderService: OrderService, private route: ActivatedRoute, private location: Location) {
    this.orderId = this.route.snapshot.params.orderId;
  }

  ngOnInit() {
    this.order$ = this.orderService.getOrderById(this.orderId);
  }

  return(): void {
    this.location.back();
  }

}

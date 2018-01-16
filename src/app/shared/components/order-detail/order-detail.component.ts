import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
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
  isLoading$: Observable<Boolean>;

  constructor(private store: Store<any>, private orderService: OrderService, private route: ActivatedRoute, private location: Location) {
    this.orderId = this.route.snapshot.params.orderId;
  }

  ngOnInit() {
    this.order$ = this.store.select('shopping', 'orders', 'orderDetail');
    this.isLoading$ = this.store.select('shopping', 'orders', 'isLoading');
  }

  return(): void {
    this.location.back();
  }

}

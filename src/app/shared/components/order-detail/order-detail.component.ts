import { Order } from './../../models/order.model';
import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'lw-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  orderId: string;
  order$: Observable<Order>;

  constructor(private orderService: OrderService, private route: ActivatedRoute, private location: Location) {
    this.orderId = this.route.snapshot.params.orderId;
   }

  ngOnInit() {
    this.order$ = this.orderService.getOrderById(this.orderId);
    this.order$.subscribe(x => console.log(x));
  }

  return(): void {
    this.location.back();
  }

}

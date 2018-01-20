import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Injectable } from '@angular/core';
import { CustomAction } from '@app/shared/models';
import { AuthService, OrderService } from '@app/shared/services';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {
  REQUEST_ORDER_DETAIL_FAILED,
  REQUEST_ORDER_DETAIL_SUCCESS,
  REQUEST_ORDERS_FAILED,
  REQUEST_ORDERS_SUCCESS,
} from './../shopping.actions';


@Injectable()
export class OrderEffects {
  // Listen for the 'REQUEST_ORDER_DETAIL' action
  @Effect() requestOrderById$: Observable<Action> = this.actions$.ofType('REQUEST_ORDER_DETAIL')
    .mergeMap((action: CustomAction) =>
      this.orderService.getOrderById(action.payload)
        // If successful, dispatch success action with result
        .map(data => REQUEST_ORDER_DETAIL_SUCCESS(data))
        // If request fails, dispatch failed action
        .catch(() => of(REQUEST_ORDER_DETAIL_FAILED()))
    );
  // Listen for the 'REQUEST_ORDERS' action
  @Effect() requestOrders$: Observable<Action> = this.actions$.ofType('REQUEST_ORDERS')
    .mergeMap((action: CustomAction) =>
      this.auth.user$.switchMap(u => this.orderService.getOrdersByUser(u.uid))
        // If successful, dispatch success action with result
        .map(data => REQUEST_ORDERS_SUCCESS(data))
        // If request fails, dispatch failed action
        .catch(() => of(REQUEST_ORDERS_FAILED()))
    );

  constructor(
    private auth: AuthService,
    private orderService: OrderService,
    private actions$: Actions
  ) { }
}
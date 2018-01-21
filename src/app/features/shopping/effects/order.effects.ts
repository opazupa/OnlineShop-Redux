import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
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
  CLEAR_SHOPPING_CART,
  PLACE_ORDER_FAILED,
  PLACE_ORDER_SUCCESS,
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

  // Listen for the 'PLACE_ORDER' action
  @Effect() placeOrder$: Observable<Action> = this.actions$.ofType('PLACE_ORDER')
    .mergeMap((action: CustomAction) =>
      this.orderService.placeOrder(action.payload)
        // If successful, dispatch success action with result
        .mergeMap(data => Observable.of(PLACE_ORDER_SUCCESS(data), CLEAR_SHOPPING_CART()))
        // If request fails, dispatch failed action
        .catch(() => of(PLACE_ORDER_FAILED()))
    );

  constructor(
    private auth: AuthService,
    private orderService: OrderService,
    private actions$: Actions
  ) { }
}
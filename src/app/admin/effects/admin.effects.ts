import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Injectable } from '@angular/core';
import { OrderService, ProductService } from '@app/shared/services';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { CustomAction } from '../../shared/models';
import {
  CREATE_PRODUCT_FAILED,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED,
  DELETE_PRODUCT_SUCCESS,
  REQUEST_ADMIN_ORDERS_FAILED,
  REQUEST_ADMIN_ORDERS_SUCCESS,
  REQUEST_ADMIN_PRODUCTS_FAILED,
  REQUEST_ADMIN_PRODUCTS_SUCCESS,
  REQUEST_SINGLE_PRODUCT_FAILED,
  REQUEST_SINGLE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILED,
  UPDATE_PRODUCT_SUCCESS,
} from './../admin.actions';


@Injectable()
export class AdminEffects {
  // Listen for the 'REQUEST_ADMIN_ORDERS' action
  @Effect() requestAdminOrders$: Observable<Action> = this.actions$.ofType('REQUEST_ADMIN_ORDERS')
    .mergeMap((action: CustomAction) =>
      this.orderService.getOrders()
        // If successful, dispatch success action with result
        .map(data => REQUEST_ADMIN_ORDERS_SUCCESS(data)))
    // If request fails, dispatch failed action
    .catch(() => of(REQUEST_ADMIN_ORDERS_FAILED())
    );

  // Listen for the 'REQUEST_ADMIN_PRODUCTS' action
  @Effect() requestAdminProducts$: Observable<Action> = this.actions$.ofType('REQUEST_ADMIN_PRODUCTS')
    .mergeMap((action: CustomAction) =>
      this.productService.getAll()
        // If successful, dispatch success action with result
        .map(data => REQUEST_ADMIN_PRODUCTS_SUCCESS(data)))
    // If request fails, dispatch failed action
    .catch(() => of(REQUEST_ADMIN_PRODUCTS_FAILED())
    );

  // Listen for the 'CREATE_PRODUCT' action
  @Effect() createProduct$: Observable<Action> = this.actions$.ofType('CREATE_PRODUCT')
    .mergeMap((action: CustomAction) =>
      this.productService.create(action.payload)
        // If successful, dispatch success action with result
        .map(data => CREATE_PRODUCT_SUCCESS(data)))
    // If request fails, dispatch failed action
    .catch(() => of(CREATE_PRODUCT_FAILED())
    );

  // Listen for the 'REQUEST_SINGLE_PRODUCT' action
  @Effect() getSingleProduct$: Observable<Action> = this.actions$.ofType('REQUEST_SINGLE_PRODUCT')
    .mergeMap((action: CustomAction) =>
      this.productService.getProduct(action.payload)
        // If successful, dispatch success action with result
        .map(data => REQUEST_SINGLE_PRODUCT_SUCCESS(data)))
    // If request fails, dispatch failed action
    .catch(() => of(REQUEST_SINGLE_PRODUCT_FAILED())
    );

  // Listen for the 'DELETE_PRODUCT' action
  @Effect() deleteProduct$: Observable<Action> = this.actions$.ofType('DELETE_PRODUCT')
    .mergeMap((action: CustomAction) =>
      this.productService.deleteProduct(action.payload)
        // If successful, dispatch success action with result
        .map(data => DELETE_PRODUCT_SUCCESS(data)))
    // If request fails, dispatch failed action
    .catch(() => of(DELETE_PRODUCT_FAILED())
    );

  // Listen for the 'UPDATE_PRODUCT' action
  @Effect() updateProduct$: Observable<Action> = this.actions$.ofType('UPDATE_PRODUCT')
    .mergeMap((action: CustomAction) =>
      this.productService.updateProduct(action.payload.id, action.payload.product)
        // If successful, dispatch success action with result
        .map(data => UPDATE_PRODUCT_SUCCESS(data)))
    // If request fails, dispatch failed action
    .catch(() => of(UPDATE_PRODUCT_FAILED())
    );

  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private actions$: Actions
  ) { }
}
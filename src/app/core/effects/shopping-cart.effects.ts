import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Injectable } from '@angular/core';
import { GET_SHOPPING_CART_FAILED, GET_SHOPPING_CART_SUCCESS } from '@app/core/core.actions';
import {
  ADD_TO_SHOPPING_CART_FAILED,
  ADD_TO_SHOPPING_CART_SUCCESS,
  CLEAR_SHOPPING_CART_FAILED,
  CLEAR_SHOPPING_CART_SUCCESS,
  REMOVE_FROM_SHOPPING_CART_FAILED,
  REMOVE_FROM_SHOPPING_CART_SUCCESS,
} from '@app/features/shopping/shopping.actions';
import { CustomAction } from '@app/shared/models';
import { ShoppingCartService } from '@app/shared/services';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class ShoppingCartEffects {
  // Listen for the 'GET_SHOPPING_CART' action
  @Effect() getShoppingCart$: Observable<Action> = this.actions$.ofType('GET_SHOPPING_CART')
    .mergeMap((action: CustomAction) =>
      this.shoppingCartService.getCart()
        // If successful, dispatch success action with result
        .map(data => GET_SHOPPING_CART_SUCCESS(data))
        // If request fails, dispatch failed action
        .catch(() => of(GET_SHOPPING_CART_FAILED()))
    );

  // Listen for the 'ADD_TO_SHOPPING_CART' action
  @Effect() addToCart$: Observable<Action> = this.actions$.ofType('ADD_TO_SHOPPING_CART')
    .mergeMap((action: CustomAction) =>
      this.shoppingCartService.addToCart(action.payload)
        // If successful, dispatch success action with result
        .map(data => ADD_TO_SHOPPING_CART_SUCCESS(data))
        // If request fails, dispatch failed action
        .catch(() => of(ADD_TO_SHOPPING_CART_FAILED()))
    );

  // Listen for the 'REMOVE_FROM_SHOPPING_CART' action
  @Effect() removeFromCart$: Observable<Action> = this.actions$.ofType('REMOVE_FROM_SHOPPING_CART')
    .mergeMap((action: CustomAction) =>
      this.shoppingCartService.removeFromCart(action.payload)
        // If successful, dispatch success action with result
        .map(data => REMOVE_FROM_SHOPPING_CART_SUCCESS(data))
        // If request fails, dispatch failed action
        .catch(() => of(REMOVE_FROM_SHOPPING_CART_FAILED()))
    );

  // Listen for the 'CLEAR_SHOPPING_CART' action
  @Effect() clearCart$: Observable<Action> = this.actions$.ofType('CLEAR_SHOPPING_CART')
    .mergeMap((action: CustomAction) =>
      this.shoppingCartService.clearCart()
        // If successful, dispatch success action with result
        .map(data => CLEAR_SHOPPING_CART_SUCCESS(data))
        // If request fails, dispatch failed action
        .catch(() => of(CLEAR_SHOPPING_CART_FAILED()))
    );

  constructor(
    private shoppingCartService: ShoppingCartService,
    private actions$: Actions
  ) { }
}
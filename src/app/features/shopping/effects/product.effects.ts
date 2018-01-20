import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Injectable } from '@angular/core';
import { CustomAction } from '@app/shared/models';
import { ProductService } from '@app/shared/services';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { REQUEST_PRODUCTS_FAILED, REQUEST_PRODUCTS_SUCCESS } from './../shopping.actions';


@Injectable()
export class ProductEffects {
  // Listen for the 'REQUEST_PRODUCTS' action
  @Effect() requestProducts$: Observable<Action> = this.actions$.ofType('REQUEST_PRODUCTS')
    .mergeMap((action: CustomAction) =>
      this.productService.getAll()
        // If successful, dispatch success action with result
        .map(data => REQUEST_PRODUCTS_SUCCESS(data))
        // If request fails, dispatch failed action
        .catch(() => of(REQUEST_PRODUCTS_FAILED()))
    );

  constructor(
    private productService: ProductService,
    private actions$: Actions
  ) { }
}
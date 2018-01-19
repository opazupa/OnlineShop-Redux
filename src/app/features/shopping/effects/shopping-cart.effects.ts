import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Injectable } from '@angular/core';
import { ShoppingCartService } from '@app/shared/services';
import { Actions } from '@ngrx/effects';


@Injectable()
export class ShoppingCartEffects {
  // // Listen for the 'REQUEST_CATEGORIES' action
  // @Effect() requestCategories$: Observable<Action> = this.actions$.ofType('REQUEST_CATEGORIES')
  //   .mergeMap((action: CustomAction) =>
  //     this.categoryService.getAll()
  //       // If successful, dispatch success action with result
  //       .map(data => REQUEST_CATEGORIES_SUCCESS(data))
  //       // If request fails, dispatch failed action
  //       .catch(() => of(REQUEST_CATEGORIES_FAILED()))
  //   );

  constructor(
    private shoppingCartService: ShoppingCartService,
    private actions$: Actions
  ) { }
}
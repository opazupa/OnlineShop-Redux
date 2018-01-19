import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Injectable } from '@angular/core';
import { CustomAction } from '@app/shared/models';
import { CategoryService } from '@app/shared/services';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { REQUEST_CATEGORIES_FAILED, REQUEST_CATEGORIES_SUCCESS } from './../shopping.actions';


@Injectable()
export class CategoryEffects {
  // Listen for the 'REQUEST_CATEGORIES' action
  @Effect() requestCategories$: Observable<Action> = this.actions$.ofType('REQUEST_CATEGORIES')
    .mergeMap((action: CustomAction) =>
      this.categoryService.getAll()
        // If successful, dispatch success action with result
        .map(data => REQUEST_CATEGORIES_SUCCESS(data))
        // If request fails, dispatch failed action
        .catch(() => of(REQUEST_CATEGORIES_FAILED()))
    );

  constructor(
    private categoryService: CategoryService,
    private actions$: Actions
  ) { }
}
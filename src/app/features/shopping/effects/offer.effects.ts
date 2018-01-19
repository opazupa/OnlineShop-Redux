import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Injectable } from '@angular/core';
import { CustomAction } from '@app/shared/models';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { REQUEST_OFFERS_FAILED, REQUEST_OFFERS_SUCCESS } from './../shopping.actions';


@Injectable()
export class OfferEffects {
  // Listen for the 'REQUEST_OFFERS' action
  @Effect() requestCategories$: Observable<Action> = this.actions$.ofType('REQUEST_OFFERS')
    .mergeMap((action: CustomAction) =>
      // No offers or service ATM
      Observable.of([])
        // If successful, dispatch success action with result
        .map(data => REQUEST_OFFERS_SUCCESS(data))
        // If request fails, dispatch failed action
        .catch(() => of(REQUEST_OFFERS_FAILED()))
    );

  constructor(
    private actions$: Actions
  ) { }
}
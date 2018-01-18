import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { CustomAction } from '@app/shared/models';
import { AuthService, UserService } from '@app/shared/services';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {
  AUTHENTICATED,
  GET_USER,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_FAILED,
  NOT_AUTHENTICATED,
} from './core.actions';


@Injectable()
export class CoreEffects {
  // Listen for the 'LOGIN' action
  @Effect() login$: Observable<Action> = this.actions$.ofType('LOGIN')
    .mergeMap((action: CustomAction) =>
      this.auth.login()
        // If successful, dispatch success action with result
        .mergeMap(() => Observable.of(AUTHENTICATED(), GET_USER()))
        // If request fails, dispatch failed action
        .catch(() => of(LOGIN_FAILED()))
    );

  // Listen for the 'LOGOUT' action
  @Effect() logout$: Observable<Action> = this.actions$.ofType('LOGOUT')
    .mergeMap((action: CustomAction) =>
      this.auth.logout()
        // If successful, dispatch success action with result
        .map(() => NOT_AUTHENTICATED())
        // If request fails, dispatch failed action
        .catch(() => of(LOGOUT_FAILED()))
    );

  // Listen for the 'LOGOUT' action
  @Effect() appUser$: Observable<Action> = this.actions$.ofType('GET_USER')
    .mergeMap((action: CustomAction) =>
      this.auth.appUser$.take(1)
        // If successful, dispatch success action with result
        .map(data => GET_USER_SUCCESS(data))
        // If GrequestET fails, dispatch failed action
        .catch(() => of(GET_USER_FAILED()))
    );

  //CATEGORIES!! TODO
  constructor(
    private userService: UserService,
    private auth: AuthService,
    private actions$: Actions
  ) { }
}
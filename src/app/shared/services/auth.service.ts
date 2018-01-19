import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from '@app/shared/models';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

import { UserService } from './user.service';

@Injectable()
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
    this.user$ = afAuth.authState;
  }

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    localStorage.setItem('returnUrl', returnUrl);
    return Observable.fromPromise(this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()));
  }

  logout() {
    return Observable.fromPromise(this.afAuth.auth.signOut()
      .then(() => this.router.navigate(['/'])));

  }

  get appUser$(): Observable<AppUser> {
    return this.user$.switchMap(user => {
      if (user) {
        return this.userService.get(user.uid);
      }
      return Observable.of(null);
    });
  }
}

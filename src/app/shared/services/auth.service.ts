import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from '@app/shared/models';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

import { NotificationService } from './notification.service';
import { UserService } from './user.service';

@Injectable()
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private notificationService: NotificationService) {
    this.user$ = afAuth.authState;
  }

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
      .then(() => this.notificationService.popSuccessToast('Login successful'))
      .catch(() => this.notificationService.popErrorToast('Error occurred in login'));
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(() => this.notificationService.popSuccessToast('Logout successful'))
      .catch(() => this.notificationService.popErrorToast('Error occurred in logout'));
    this.router.navigate(['/']);
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

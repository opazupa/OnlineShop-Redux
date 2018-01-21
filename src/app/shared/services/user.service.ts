import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { AppUser } from '@app/shared/models';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: string): Observable<AppUser> {
    return this.db.object('/users/' + uid).valueChanges()
      .map(user => {
        return ({ id: uid, ...user }) as AppUser;
      });
  }

}

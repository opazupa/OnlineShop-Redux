import { Injectable } from '@angular/core';
import { AngularFireObject } from 'angularfire2/database/interfaces';
import { AngularFireDatabase,   } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AppUser } from '@app/shared/models';
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

  // Why isn't this okey with Obsevable<AppUser>
  get(uid: string): Observable<any>  {
    return this.db.object('/users/' + uid).valueChanges();
  }

}

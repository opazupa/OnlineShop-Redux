import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { AppUser } from '@app/shared/models';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

export interface Data {
  id: string;
  a: string;
  b: string;
}

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

  test(id: number): Observable<Data> {
    const d = {} as Data;
    return this.obs('id')
      .map(eka => ({ id: eka } as Data))
      .catch(() => {
        console.log('error');
        return Observable.of({});
      })
      .switchMap((data: Data) => {
        return this.obs('toka')
          .map(toka => {
            console.log(data);
            data.a = toka;
            return data;
          });
      })
      .catch(() => {
        console.log('error');
        return Observable.of({});
      })
      .switchMap((data: Data) => {
        return this.obs('X')
          .map(kolmas => ({ b: kolmas, ...data }));
      })
      .catch(() => {
        console.log('error 2');
        return Observable.of({} as Data);
      });
  }

  private obs(a: string): Observable<string> {
    if (a === 'X') {
      Observable.throw('virhe');
    }
    return Observable.of(a);
  }
}

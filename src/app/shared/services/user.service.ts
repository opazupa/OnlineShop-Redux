import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AppUser } from '@app/shared/models';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';

export interface Data {
  id: string;
  a: string;
  b: string;
  c?: number;
  d?: number;
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
    return this.obs(id.toString())
      // Eka request
      .map(eka => ({ id: eka } as Data))
      // Eka error
      .catch((e) => {
        console.log(e);
        return Observable.of({});
      })
      // Toka request
      .switchMap((data: Data) => {
        console.log(data);
        return this.obs('12')
          .map(toka => {
            data.a = toka;
            return data;
          });
      })
      // ...
      .catch((e) => {
        console.log(e);
        // return _throw('toka');
        return Observable.of({});
      })
      // ...
      .switchMap((data: Data) => {
        return this.obs('32')
          .map(kolmas => ({ b: kolmas, ...data }));
      })
      // ...
      .catch((e) => {
        console.log(e);
        // return _throw('kolmas');
        return Observable.of({});
      })
      // ...
      .switchMap((data: Data) => {
        console.log(data);
        return this.obs('2X')
          .map(neljas => ({
            c: neljas.c,
            d: neljas.d,
            ...data
          }));
      })
      .do(data => console.log(data))
      .catch((e) => {
        console.log(e);
        return Observable.of({} as Data);
      });
  }

  // Observable generator
  private obs(a: string): Observable<any> {
    // Simulate error
    if (a === 'e') {
      return _throw('virhe');
    }
    if (a === '2X') {
      return Observable.of({ c: 1, d: 2, e: 5 });
    }
    return Observable.of(a);
  }
}

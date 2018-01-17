import { Component, Input } from '@angular/core';
import { AppUser } from '@app/shared/models';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { LOGIN, LOGOUT } from '../../core.actions';

@Component({
  selector: 'lw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  @Input('modal')
  modalRef: NgbModalRef;

  appUser$: Observable<AppUser>;

  constructor(private store: Store<any>) {
    this.appUser$ = this.store.select('core', 'user');
  }

  login() {
    this.store.dispatch(LOGIN());
    this.closeLoginModal();
  }

  logout() {
    this.store.dispatch(LOGOUT());
  }

  private closeLoginModal() {
    if (this.modalRef) {
      this.modalRef.dismiss();
    }
  }
}

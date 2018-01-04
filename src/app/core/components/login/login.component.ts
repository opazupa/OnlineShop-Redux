import { Component } from '@angular/core';
import { easeInOutAnimation } from '@app/shared/animations';
import { AppUser } from '@app/shared/models';
import { AuthService } from '@app/shared/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // make fade in animation available to this component
  animations: [easeInOutAnimation],

  // attach the fade in animation to the host (root) element of this component
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@easeInOut]': '' }
})
export class LoginComponent {

  appUser$: Observable<AppUser>;

  constructor(private auth: AuthService) {
    this.appUser$ = this.auth.appUser$;
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}

import { Component } from '@angular/core';
import { AuthService } from '@app/shared/services';
import { Observable } from 'rxjs/Observable';
import { AppUser } from '@app/shared/models';

@Component({
  selector: 'lw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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

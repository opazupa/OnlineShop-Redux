import { Component } from '@angular/core';
import { AuthService } from '@app/shared/services';

@Component({
  selector: 'lw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth: AuthService) { }

  login() {
    this.auth.login();
  }
}

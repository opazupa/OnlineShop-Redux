import { Component } from '@angular/core';
import { AuthService, UserService } from '@app/shared/services';
import { Router } from '@angular/router';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private userService: UserService, private auth: AuthService, private router: Router) {
    auth.user$.subscribe(user => {
      if (user) {
        this.userService.save(user);
        const returnUrl = localStorage.getItem('returnUrl');

        if (returnUrl !== 'null') {
          localStorage.removeItem('returnUrl');
          router.navigateByUrl(returnUrl);
        }
      }
    });
  }

  public toasterconfig: ToasterConfig =
    new ToasterConfig({
      showCloseButton: false,
      tapToDismiss: true,
      timeout: 2000,
      positionClass: 'toast-bottom-center'
    });
}

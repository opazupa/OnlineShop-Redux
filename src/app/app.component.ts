import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '@app/core/services/notification.service';
import { AuthService, UserService } from '@app/shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private userService: UserService,
    private auth: AuthService,
    private router: Router,
    private notificationService: NotificationService) {
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
}

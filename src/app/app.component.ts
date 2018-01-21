import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NotificationService } from '@app/core/services/notification.service';
import { routerTransition } from '@app/shared/animations';
import { AuthService, UserService } from '@app/shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
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

  getState(outlet: RouterOutlet) {
    const state = outlet.activatedRouteData.animation ? outlet.activatedRouteData.animation : null;
    return state;
  }
}

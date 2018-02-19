import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '@app/core/services/notification.service';
import { AuthService, UserService } from '@app/shared/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data$: Observable<any>;

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

  moi() {
    this.data$ = this.userService.test(101010);
    //this.userService.test(12).subscribe((x) => console.log(x));
  }
}

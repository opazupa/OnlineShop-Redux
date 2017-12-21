import { Component } from '@angular/core';
import { AuthService, UserService } from '@app/shared/services';
import { Router } from '@angular/router';

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
        let returnUrl = localStorage.getItem('returnUrl');
        // Redirect home by default
        returnUrl = returnUrl !== 'null' ? returnUrl : '/';
        router.navigateByUrl(returnUrl);
      }
    });
  }
}

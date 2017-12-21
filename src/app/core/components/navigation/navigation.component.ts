import { AppUser } from './../../../shared/models/user.model';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '@app/shared/services';

@Component({
  selector: 'lw-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  showCollapsedMenu: Boolean = false;
  appUser$: Observable<AppUser>;

  constructor(private auth: AuthService) {
    this.appUser$ = this.auth.appUser$;
  }

  close() {
    this.showCollapsedMenu = false;
  }

  toggleCollapse() {
    this.showCollapsedMenu = !this.showCollapsedMenu;
  }

  logout() {
    this.auth.logout();
    this.close();
  }

}

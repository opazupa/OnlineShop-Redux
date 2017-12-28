import { AppUser } from './../../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService, ShoppingCartService } from '@app/shared/services';
import { ShoppingCart } from '@app/shared/models';

@Component({
  selector: 'lw-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  showCollapsedMenu: Boolean = false;
  appUser$: Observable<AppUser>;
  cart$: Observable<ShoppingCart>;

  constructor(
    private auth: AuthService,
    private cartService: ShoppingCartService) {
  }

  async ngOnInit() {
    this.appUser$ = this.auth.appUser$;
    this.cart$ = await this.cartService.getCart();
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

import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '@app/shared/models';
import { AuthService, ShoppingCartService } from '@app/shared/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';

import { LoginModalComponent } from '../login/login-modal/login-modal.component';
import { AppUser } from './../../../shared/models/user.model';

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
    private cartService: ShoppingCartService,
    private modalService: NgbModal
  ) {

  }

  async ngOnInit() {
    this.appUser$ = this.auth.appUser$;
    this.cart$ = await this.cartService.getCart();
  }

  close() {
    setTimeout(() => this.toggleCollapse(), 350);
  }

  toggleCollapse() {
    this.showCollapsedMenu = !this.showCollapsedMenu;
  }

  logout() {
    this.auth.logout();
    this.close();
  }

  openLoginModal(): void {
    this.modalService.open(LoginModalComponent);
  }

}

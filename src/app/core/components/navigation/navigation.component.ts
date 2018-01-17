import { Component, OnInit } from '@angular/core';
import { LOGOUT } from '@app/core/core.actions';
import { ShoppingCart } from '@app/shared/models';
import { ShoppingCartService } from '@app/shared/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
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
    private cartService: ShoppingCartService,
    private modalService: NgbModal,
    private store: Store<any>
  ) {

  }

  async ngOnInit() {
    this.appUser$ = this.store.select('core', 'user');
    this.cart$ = await this.cartService.getCart();
  }

  close() {
    setTimeout(() => this.toggleCollapse(), 350);
  }

  toggleCollapse() {
    this.showCollapsedMenu = !this.showCollapsedMenu;
  }

  logout() {
    this.store.dispatch(LOGOUT());
    this.close();
  }

  openLoginModal(): void {
    this.modalService.open(LoginModalComponent);
  }

}

import { Component, OnInit } from '@angular/core';
import { GET_SHOPPING_CART, GET_USER, LOGOUT } from '@app/core/core.actions';
import { ModalService } from '@app/core/services/modal.service';
import { ShoppingCart } from '@app/shared/models';
import { ShoppingCartService } from '@app/shared/services';
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
    private modalService: ModalService,
    private store: Store<any>
  ) {
    this.appUser$ = this.store.select('core', 'user');
  }

  ngOnInit() {
    this.store.dispatch(GET_USER());
    this.store.dispatch(GET_SHOPPING_CART());
    this.cart$ = this.store.select('core', 'shoppingCart');
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

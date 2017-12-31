import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '@app/shared/models';
import { NotificationService, ShoppingCartService } from '@app/shared/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lw-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cart$: Observable<ShoppingCart>;

  constructor(private cartService: ShoppingCartService, private notificationService: NotificationService) { }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }

  clearCart(): void {
    this.cartService.clearCart()
      .then(() => this.notificationService.popSuccessToast('Shopping cart cleared'))
      .catch(() => this.notificationService.popErrorToast('Shopping cart failed to be cleared'));
  }
}

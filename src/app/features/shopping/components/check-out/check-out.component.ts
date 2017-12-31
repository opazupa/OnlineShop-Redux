import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '@app/shared/models';
import { ShoppingCartService } from '@app/shared/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lw-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  cart$: Observable<ShoppingCart>;

  constructor(private cartService: ShoppingCartService) { }

  async ngOnInit() {

    this.cart$ = await this.cartService.getCart();

  }


}

import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '@app/shared/models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lw-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  cart$: Observable<ShoppingCart>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.cart$ = this.store.select('core', 'shoppingCart');
  }


}

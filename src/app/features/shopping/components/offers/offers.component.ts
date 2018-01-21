import { Component } from '@angular/core';
import { REQUEST_OFFERS } from '@app/features/shopping/shopping.actions';
import { routerTransition } from '@app/shared/animations';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lw-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
  animations: [routerTransition]
})
export class OffersComponent {

  offers$: Observable<any>;

  constructor(private store: Store<any>) {
    this.offers$ = this.store.select('shopping', 'shop', 'offers');
    this.store.dispatch(REQUEST_OFFERS());
  }

}

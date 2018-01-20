import { Component, Input, OnInit } from '@angular/core';
import { REQUEST_CATEGORIES } from '@app/features/shopping/shopping.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lw-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  @Input('category')
  category: string;
  categories$: Observable<any>;

  constructor(private store: Store<any>) {
    this.categories$ = this.store.select('shopping', 'categories');
  }

  ngOnInit() {
    this.store.dispatch(REQUEST_CATEGORIES());
  }

}

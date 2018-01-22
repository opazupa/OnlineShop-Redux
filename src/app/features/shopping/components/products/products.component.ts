import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { REQUEST_PRODUCTS } from '@app/features/shopping/shopping.actions';
import { fadeInAnimation } from '@app/shared/animations';
import { Product, ShoppingCart } from '@app/shared/models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lw-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [fadeInAnimation]
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  cart$: Observable<ShoppingCart>;
  isLoading$: Observable<Boolean>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<any>) {
    this.products$ = this.store.select('shopping', 'shop', 'products');
    this.cart$ = this.store.select('core', 'shoppingCart');
    this.isLoading$ = this.store.select('core', 'isLoading');
  }

  ngOnInit() {
    this.store.dispatch(REQUEST_PRODUCTS());
    this.populateProducts();
  }

  private applyFilter() {
    this.filteredProducts = (this.category) ?
      this.products.filter(p => p.category === this.category) :
      this.products;
  }

  private populateProducts() {
    this.products$
      .switchMap(p => {
        this.products = p;
        return this.route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();
      });
  }

}

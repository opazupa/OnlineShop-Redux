import 'rxjs/add/operator/take';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DELETE_PRODUCT, REQUEST_ADMIN_PRODUCTS, REQUEST_SINGLE_PRODUCT } from '@app/admin/admin.actions';
import { Product } from '@app/shared/models';
import { ProductService } from '@app/shared/services';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'lw-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products: Product[];
  filteredProducts: Product[];
  subscription: Subscription;
  isLoading$: Observable<Boolean>;

  constructor(private productService: ProductService, private router: Router, private store: Store<any>) {
    this.subscription = this.store.select('admin', 'products').take(1).subscribe(ps => this.filteredProducts = this.products = ps);
    this.isLoading$ = this.store.select('admin', 'isLoading');
  }

  ngOnInit() {
    this.store.dispatch(REQUEST_ADMIN_PRODUCTS());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filter(query?: string) {
    this.filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;
  }

  editProduct(product: Product) {
    this.store.dispatch(REQUEST_SINGLE_PRODUCT(product.key));
    this.router.navigate([`/admin/products/${product.key}`]);
  }

  deleteProduct(product: Product) {
    if (confirm('Are You sure to delete the selected product?')) {
      this.store.dispatch(DELETE_PRODUCT(product.key));
    }
  }

}

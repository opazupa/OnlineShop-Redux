import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { REQUEST_ADMIN_PRODUCTS, REQUEST_SINGLE_PRODUCT } from '@app/admin/admin.actions';
import { ModalService } from '@app/core/services/modal.service';
import { Product } from '@app/shared/models';
import { ProductService } from '@app/shared/services';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { DELETE_PRODUCT } from './../../admin.actions';

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

  constructor(
    private productService: ProductService,
    private router: Router,
    private modalService: ModalService,
    private store: Store<any>
  ) {
    this.subscription = this.store.select('admin', 'products').subscribe(ps => this.filteredProducts = this.products = ps);
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
    this.modalService.confirm('Delete selected product!', 'Are you sure?')
      .take(1)
      .filter(Boolean)
      .subscribe(() => this.store.dispatch(DELETE_PRODUCT(product.key)), (e) => false);
  }

}

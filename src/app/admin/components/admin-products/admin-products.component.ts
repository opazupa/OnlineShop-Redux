import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@app/shared/models';
import { ProductService } from '@app/shared/services';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'lw-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnDestroy {

  products: Product[];
  filteredProducts: Product[];
  subscription: Subscription;

  constructor(private productService: ProductService, private router: Router) {
    this.subscription = this.productService.getAll().subscribe(ps => this.filteredProducts = this.products = ps);
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
    this.router.navigate([`/admin/products/${product.key}`]);
  }

  deleteProduct(product: Product) {
    if (confirm('Are You sure to delete the selected product?')) {
      this.productService.deleteProduct(product.key);
    }
  }

}

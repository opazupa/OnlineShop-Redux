import { Component } from '@angular/core';
import { ProductService } from '@app/shared/services';
import { Observable } from 'rxjs/Observable';
import { Product } from '@app/shared/models';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'lw-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) {

    this.productService.getAll().switchMap(p => {
      this.products = p;
      return this.route.queryParamMap;
      }).subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ? 
        this.products.filter(p => p.category === this.category) :
        this.products;
    });

   }


}

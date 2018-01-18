import 'rxjs/add/operator/take';

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DELETE_PRODUCT } from '@app/admin/admin.actions';
import { FormComponent } from '@app/shared/components';
import { Product } from '@app/shared/models';
import { CategoryService, ProductService } from '@app/shared/services';
import { Store } from '@ngrx/store';
import { CustomValidators } from 'ng2-validation';
import { Observable } from 'rxjs/Observable';

import { CREATE_PRODUCT, UPDATE_PRODUCT } from './../../admin.actions';

@Component({
  selector: 'lw-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent extends FormComponent implements OnInit {

  categories$: Observable<any>;
  product: Product = {};
  id: string;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private store: Store<any>) {

    super();

    this.categories$ = categoryService.getAll();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {

      this.store.select('admin', 'selectedProduct').take(1).subscribe(p => this.product = p);
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required, Validators.min(0), CustomValidators.number])],
      category: ['', Validators.required],
      imageUrl: ['', Validators.compose([Validators.required, CustomValidators.url])]
    });
  }

  saveProduct(): void {
    const product = this.form.value as Product;

    if (this.id) {
      this.store.dispatch(UPDATE_PRODUCT({ id: this.id, product }));
    } else {
      this.store.dispatch(CREATE_PRODUCT(product));
    }
    this.router.navigate(['/admin/products']);
  }

  deleteProduct(): void {
    if (confirm('Are You sure to delete the selected product?')) {
      this.store.dispatch(DELETE_PRODUCT(this.id));
      this.router.navigate(['/admin/products']);
    }
  }

  return(): void {
    this.location.back();
  }
}

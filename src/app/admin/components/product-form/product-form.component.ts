import 'rxjs/add/operator/take';

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '@app/core/services/modal.service';
import { REQUEST_CATEGORIES } from '@app/features/shopping/shopping.actions';
import { FormComponent } from '@app/shared/components';
import { Product } from '@app/shared/models';
import { Store } from '@ngrx/store';
import { CustomValidators } from 'ng2-validation';
import { Observable } from 'rxjs/Observable';

import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from './../../admin.actions';

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
    private modalService: ModalService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private store: Store<any>) {

    super();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.store.select('admin', 'selectedProduct').take(1).subscribe(p => this.product = p);
    }
    this.categories$ = this.store.select('admin', 'categories');
  }

  ngOnInit() {
    this.store.dispatch(REQUEST_CATEGORIES());
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
    this.modalService.confirm('Delete selected product', 'Are you sure?')
      .take(1)
      .filter(Boolean)
      .subscribe(() => {
        this.store.dispatch(DELETE_PRODUCT(this.id));
        this.router.navigate(['/admin/products']);
      }, (e) => false);
  }

  return(): void {
    this.location.back();
  }
}

import { CustomValidators } from 'ng2-validation';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService, ProductService } from '@app/shared/services';
import { Observable } from 'rxjs/Observable';
import { Product } from '@app/shared/models';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'lw-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  categories$: Observable<any>;
  product: Product = {};
  productForm: FormGroup;
  id: string;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {

    this.categories$ = categoryService.getAll();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.getProduct(this.id).take(1).subscribe(p => this.product = p);
    }
  }

  ngOnInit() {
      this.productForm = this.fb.group({
      title: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required, Validators.min(0), CustomValidators.number])],
      category: ['', Validators.required],
      imageUrl: ['', Validators.compose([Validators.required, CustomValidators.url])]
    });
  }

  saveProduct(): void {
    const product = this.productForm.value as Product;
    // this.product

    if (this.id) {
      this.productService.updateProduct(this.id, product);
    } else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);
  }

  deleteProduct(): void {
    if (confirm('Are You sure to delete the selected product?')) {
      this.productService.deleteProduct(this.id);
      this.router.navigate(['/admin/products']);
    }
  }

  isFormUntouched(): boolean {
    return this.productForm.pristine;
  }

  getFormControlValue(controlName: string) {
    const control = this.productForm.get(controlName);

    return control.value || '';
  }


  validateFormControl(controlName: string) {
    const control = this.productForm.get(controlName);
    return control.invalid && control.touched;
  }

  isFormEmpty(): Boolean {
    let result = true;
    Object.keys(this.productForm.controls).forEach(key => {
      if (this.productForm.get(key).value !== undefined && !this.productForm.get(key).errors ) {
        result = false;
      }
    });
    return result;
  }
}

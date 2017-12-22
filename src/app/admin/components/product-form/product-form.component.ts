import { CustomValidators } from 'ng2-validation';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService, ProductService } from '@app/shared/services';
import { Observable } from 'rxjs/Observable';
import { Product } from '@app/shared/models';
import { Router } from '@angular/router';

@Component({
  selector: 'lw-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  categories$: Observable<any>;
  productForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router) {
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit() {
      this.productForm = this.fb.group({
      title: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required, Validators.min(0), CustomValidators.number])],
      category: ['', Validators.required],
      imageUrl: ['', Validators.compose([Validators.required, CustomValidators.url])]
    });
  }

  save(): void {
    const product = this.productForm.value as Product;
    this.productService.create(product);
    this.router.navigate(['/admin/products']);

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

}

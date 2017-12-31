import { Component, Input } from '@angular/core';
import { CategoryService } from '@app/shared/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lw-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {

  @Input('category')
  category: string;
  categories$: Observable<any>;

  constructor(private categoryService: CategoryService) {
    this.categories$ = this.categoryService.getAll();
  }


}

import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CategoryService } from '@app/shared/services';

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

import { Component, Input } from '@angular/core';
import { Product } from '../../models';

@Component({
  selector: 'lw-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  
  @Input('product')
  product: Product;
  // tslint:disable-next-line:no-input-rename
  @Input('show-actions')
  showActions = true;
  // tslint:disable-next-line:no-input-rename
  @Input('show-category')
  showCategory = true;

  constructor() { }

}

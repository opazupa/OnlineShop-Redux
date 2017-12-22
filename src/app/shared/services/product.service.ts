import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from '@app/shared/models';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product: Product) {
    return this.db.list('/products').push(product);
  }
}

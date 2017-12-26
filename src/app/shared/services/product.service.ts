import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from '@app/shared/models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product: Product) {
    return this.db.list('/products').push(product);
  }

  getAll(): Observable<Product[]> {
    return this.db.list('/products').snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }) as Product);
      });
  }

  getProduct(productId: string): Observable<Product> {
    return this.db.object('/products/' + productId).valueChanges().map(p => p as Product);
  }

   updateProduct(productId: string, product: Product): Observable<Product> {
    this.db.object('/products/' + productId).update(product);
    return this.getProduct(productId);
  }

  deleteProduct(productId: string) {
    return this.db.object('/products/' + productId).remove();
  }
}

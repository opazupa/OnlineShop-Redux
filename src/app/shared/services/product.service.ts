import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Product } from '@app/shared/models';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { NotificationService } from './notification.service';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase, private notificationService: NotificationService) { }

  create(product: Product) {
    return this.db.list('/products').push(product)
      .then(() => this.notificationService.popSuccessToast('Product created'));
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
    this.db.object('/products/' + productId).update(product)
      .then(() => this.notificationService.popSuccessToast('Product updated'));
    return this.getProduct(productId);
  }

  deleteProduct(productId: string) {
    return this.db.object('/products/' + productId).remove()
      .then(() => this.notificationService.popSuccessToast('Product deleted'))
      .catch(() => this.notificationService.popErrorToast('Product deletion failed'));
  }
}

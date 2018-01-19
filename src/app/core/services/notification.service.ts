import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeLast';

import { Injectable } from '@angular/core';
import { Notification } from '@app/shared/models';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificationService {
  constructor(private toastr: ToastrService, private store: Store<any>) {
    this.store.select('core', 'notifications').subscribe((toast: Notification) => {
      setTimeout(() => this.popToast(toast));
    });
  }

  popToast(toast: Notification): void {
    if (!toast) {
      return;
    }
    if (toast.type === 'success') {
      this.toastr.success(toast.message, toast.title);
    } else if (toast.type === 'error') {
      this.toastr.error(toast.message, toast.title);
    }
  }
}

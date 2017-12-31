import { Injectable } from '@angular/core';
import { ToasterService, Toast } from 'angular2-toaster';

@Injectable()
export class NotificationService {

  constructor(private toasterService: ToasterService) { }

  popSuccessToast(message: string): void {
    const toast: Toast = {
      type: 'success',
      body: message
    };

    this.toasterService.pop(toast);
  }

  popErrorToast(message: string): void {
    const toast: Toast = {
      type: 'error',
      body: message
    };

    this.toasterService.pop(toast);
  }

}

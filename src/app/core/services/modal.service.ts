import { Injectable } from '@angular/core';
import { ConfirmModalComponent } from '@app/shared/components/confirm-modal/confirm-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ModalService {


  constructor(private modalService: NgbModal) { }

  confirm(title: string, message: string) {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;

    return Observable.fromPromise(modalRef.result);
  }

  open(content: any) {
    const modalRef = this.modalService.open(content);
    return Observable.fromPromise(modalRef.result);
  }
}

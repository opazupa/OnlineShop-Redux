import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@app/shared/services';

@Component({
  selector: 'lw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  constructor(config: NgbCarouselConfig, private toasterService: NotificationService) {
    config.interval = 7000;
    config.keyboard = false;
  }

  ngOnInit() {
  }

  toast() {
    this.toasterService.popErrorToast('Args Body');
  }
}

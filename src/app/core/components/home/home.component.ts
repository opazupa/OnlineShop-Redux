import { Component } from '@angular/core';
import { NotificationService } from '@app/shared/services';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'lw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent {

  constructor(config: NgbCarouselConfig, private toasterService: NotificationService) {
    config.interval = 7000;
    config.keyboard = false;
  }
}

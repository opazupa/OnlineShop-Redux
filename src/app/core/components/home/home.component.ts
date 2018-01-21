import { Component } from '@angular/core';
import { routerTransition } from '@app/shared/animations';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'lw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig],
  animations: [routerTransition]
})
export class HomeComponent {

  constructor(config: NgbCarouselConfig) {
    config.interval = 7000;
    config.keyboard = false;
  }
}

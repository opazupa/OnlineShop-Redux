import { Component, Input } from '@angular/core';

@Component({
  selector: 'lw-animated-toggle',
  templateUrl: './animated-toggle.component.html',
  styleUrls: ['./animated-toggle.component.scss']
})
export class AnimatedToggleComponent {

  @Input()
  toggle?: boolean;
  constructor() { }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lw-animated-toggle',
  templateUrl: './animated-toggle.component.html',
  styleUrls: ['./animated-toggle.component.scss']
})
export class AnimatedToggleComponent implements OnInit {

  @Input()
  toggle?: boolean;
  constructor() { }

  ngOnInit() {
  }

}

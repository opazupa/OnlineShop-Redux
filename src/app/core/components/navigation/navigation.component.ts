import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lw-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  showCollapsedMenu: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.showCollapsedMenu = false;
  }

  toggleCollapse() {
    this.showCollapsedMenu = !this.showCollapsedMenu;
  }

}

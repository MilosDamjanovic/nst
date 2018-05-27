import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nst-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  isAuth = false;
 @Output() sideNavToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.onClose();
  }

  onLogout() { }

}

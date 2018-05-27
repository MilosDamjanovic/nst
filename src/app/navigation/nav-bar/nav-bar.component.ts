import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nst-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isAuth = false;
  @Output() sideNavToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onToggleSidenav() {
    this.sideNavToggle.emit();
  }

  /**
   *   onLogout() {
    this.authService.logout();
  }

   // to prevent memory leaks you should unsubscribe from the observables
  ngOnDestroy() {
    this.authSupscription.unsubscribe();
  }
   */


}

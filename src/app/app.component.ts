import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'nst-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Pharmacy Project';
  isLoggedIn$: Observable<boolean> = this.authService.isAuthenticated$;
  isLoggedIn;

  links = [
    { path: '', icon: 'work', label: 'Login' },
    { path: '/medicine', icon: 'work', label: 'Medicie' }
  ];

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    // fali login!
  this.isLoggedIn$
      .subscribe(loggedIn => {
        const path = (loggedIn) ? '' : '';
        this.isLoggedIn = loggedIn;
        this.router.navigate([path]);
      });
  }

  logout() {
  //  this.authService.logout();
  }

  isSidenaveOpen(component, authentication) {
    return component.opened && authentication;
  }

  onToggle() {

  }

}

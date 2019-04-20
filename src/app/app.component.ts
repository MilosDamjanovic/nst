import { AuthenticationService } from "./shared/services/authentication.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "nst-app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Pharmacy Project";
  isLoggedIn$: Observable<boolean> = this.authService.isAuthenticated$;
  isLoggedIn;

  links = [
    { path: "/medecine", icon: "work", label: "Medicine" },
    { path: "/bill", icon: "shopping_card", label: "Bill" },
    {
      path: "/perscription",
      icon: "note_add",
      label: "Perscription"
    }
  ];

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn$.subscribe(loggedIn => {
      const path = loggedIn ? "" : "login";
      this.isLoggedIn = loggedIn;
      this.router.navigate([path]);
    });
  }

  logout(): void {
    this.authService.logout();
  }

  isSidenavOpen(component, authentication): void {
    return component.opened && authentication;
  }
}

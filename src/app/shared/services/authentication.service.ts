import { environment } from "./../../../environments/environment";

import { Observable, BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  model = "api/login";

  private readonly AUTH_TOKEN = "CURRENT_TOKEN";
  private authToken: string;
  isAuthenticated$ = new BehaviorSubject(true);

  constructor(private http: HttpClient) {
    this.setToken(this.getToken());
  }

  getUrl(): string {
    return `${environment.server}${this.model}`;
  }

  login(credentials: any): Observable<any> {
    /*
    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
  } : {});
  */
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      responseType: "text" as "json"
    };

    //  .set('Content-Type', 'application/json; charset=utf-8');
    // headers.set('Access-Control-Allow-Credentials', 'true');
    // headers.set('Access-Control-Allow-Origin', '*');
    // headers.set('Content-Type', 'application/json');
    // headers.set('NST-TOKEN', this.token);

    return this.http
      .post<any>(this.getUrl(), this.apiData(credentials), httpOptions)
      .pipe(
        map(token => {
          // store user details and basic auth credentials in local storage
          // to keep user logged in between page refreshes'
          this.authToken = JSON.stringify(token);
          localStorage.setItem(this.AUTH_TOKEN, this.authToken);
          return token;
        })
      );
  }

  logout(): void {
    this.setToken("");
  }
  // TOKEN
  setToken(token: any): void {
    localStorage.setItem(this.AUTH_TOKEN, token);
    this.isAuthenticated$.next(token !== null); // Could be more Robust
  }

  getToken(): string {
    if (!this.authToken) {
      this.authToken = localStorage.getItem(this.AUTH_TOKEN);
    }
    return this.authToken;
  }

  private apiData = data => JSON.stringify(data);
}

import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthenticationService {

  public token: string;
  isAuthenticated$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
   // JSON.parse(localStorage.getItem('currentUser'));
   // var currentUser = 'llol';
  //  this.token = currentUser && this.token;
  }
  /*
  login(credentials): Observable<boolean> {
    // let credentials = JSON.parse('{"username":"+username+", "password":"+password+"}')
    const headers = new Headers({ 'Authorization': 'Basic ' + this.token, 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('/login', credentials)
      .((response: Response) => {
        // let token = response.json() && response.json().token;
        const token = response.text;
        console.log(token);
        return true;
      });
  }
  */
  logout() {
    this.setToken('');
  }
    // TOKEN
    setToken(token) {
      localStorage.setItem('token', token);
      this.isAuthenticated$.next(token !== ''); // Could be more Robust
    }
}

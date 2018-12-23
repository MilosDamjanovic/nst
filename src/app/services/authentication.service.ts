import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Response, Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class AuthenticationService {

  public token: string;

  constructor(private http: Http) {
   // JSON.parse(localStorage.getItem('currentUser'));
   // var currentUser = 'llol';
  //  this.token = currentUser && this.token;
  }
  login(credentials): Observable<boolean> {
    // let credentials = JSON.parse('{"username":"+username+", "password":"+password+"}')
    const headers = new Headers({ 'Authorization': 'Basic ' + this.token, 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('/login', credentials)
      .map((response: Response) => {
        // let token = response.json() && response.json().token;
        const token = response.text;
        console.log(token);
        return true;
      });
  }
}

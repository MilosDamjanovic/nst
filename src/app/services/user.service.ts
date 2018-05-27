import { User } from '../model/user';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class UserServiceService {

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {
     }
   //  getUsers(): Observable<User[]> {

     // return this.http.get('mesto/all',options)
     // .map((response : Response) => response.json());
     // }
}

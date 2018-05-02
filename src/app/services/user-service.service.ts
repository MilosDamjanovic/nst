import { User } from '../model/user';
import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions, Response } from '@angular/http';
import { AuthenticationServiceService } from './authentication-service.service';
import { Observable } from 'rxjs';

@Injectable()
export class UserServiceService {

  constructor(
    private http: Http,
    private authenticationService: AuthenticationServiceService) {
     }
   //  getUsers(): Observable<User[]> {
 

     // return this.http.get('mesto/all',options)
     // .map((response : Response) => response.json());
     //}
}

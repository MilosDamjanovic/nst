import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class UserServiceService {

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService) {
     }
   //  getUsers(): Observable<User[]> {

     // return this.http.get('mesto/all',options)
     // .map((response : Response) => response.json());
     // }
}

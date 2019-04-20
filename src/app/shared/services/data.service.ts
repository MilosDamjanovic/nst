
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export class DataService {
    constructor(private url: string, private http: HttpClient) {
    }

    // options
    // morace ovde da ide header
    getAll() {
       // let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
      //  let options = new RequestOptions({ headers: headers });
      /*
        console.log(this.url + '/all');
        return this.http.get(this.url + '/all')
            .map(response => response)
            .catch(this.handleError);
    }
    */
  }

    /*
    createResourse(resource) {
        console.log(this.url + '/save');
        return this.http.post(this.url + '/save', JSON.stringify({ isRead: true }))
            .map(response => response)
            .catch(this.handleError);
    }
    */

    /*
    deleteResouse(id) {
        console.log(this.url + '/delete');
        return this.http.delete(this.url + '/' + id)
            .map(response => response)
            .catch(this.handleError);
    }
    */

    /*
    private handleError(error: Response) {
        if (error.status === 404) {
            return observableThrowError('nesto privremeno, NOT FOUND!');
        }
        if (error.status === 400) {
            return observableThrowError('Nesto je korisnik pogresio');
        }

        return observableThrowError('Neka tamo random greska');
    }
    */
}

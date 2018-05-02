import { Http, RequestOptions } from '@angular/http';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


export class DataService {
    constructor(private url: string, private http: Http) {
    }

    //options
    //morace ovde da ide header
    getAll() {
       // let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
      //  let options = new RequestOptions({ headers: headers });  
        console.log(this.url + "/all");
        return this.http.get(this.url + "/all")
            .map(response => response.json())
            .catch(this.handleError);
    }

    createResourse(resource) {
        console.log(this.url + "/save");
        return this.http.post(this.url + "/save", JSON.stringify({ isRead: true }))
            .map(response => response.json())
            .catch(this.handleError);
    }

    updateResource(resourse) {
        //patch ili put
        console.log(this.url + "/update");
        return this.http.patch(this.url + "/" + resourse.id, JSON.stringify({ isRead: true }))
            .map(response => response.json())
            .catch(this.handleError);
    }

    deleteResouse(id) {
        console.log(this.url + "/delete");
        return this.http.delete(this.url + "/" + id)
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        if (error.status === 404) {
            return Observable.throw('nesto privremeno, NOT FOUND!');
        }
        if (error.status === 400) {
            return Observable.throw('Nesto je korisnik pogresio');
        }

        return Observable.throw('Neka tamo random greska');
    }

}
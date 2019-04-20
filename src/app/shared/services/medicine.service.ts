import { environment } from "./../../../environments/environment";
import { Medecine } from "../models/medecine";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { NotificationsService } from "./notification/notifications.service";
import { throwError, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MedicineService {
  private model = "medicine";
  //  super('http://localhost:8080/medicine', http);

  constructor(
    private http: HttpClient,
    private notificationsService: NotificationsService
  ) {}

  getUrl(): string {
    return `${environment.server}${this.model}`;
  }

  getUrlForId(id): string {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get<Medecine[]>(this.getUrl());
  }

  load(id) {
    return this.http.get<Medecine>(this.getUrlForId(id));
  }

  /*
  loadByCustomer(medecine: string) {
    return this.http.get<Medecine[]>(this.getUrl(), { params: { customerId } })
      .pipe(
        switchMap(medecines => {
          if (medecines.length) {
            return of(medecines);
          } else {
            return throwError(`No medecines exist for customer with ID ${customerId}`);
          }
        }),
        catchError(error => {
          this.notificationsService.emit(error);

          return throwError(error);
        })
      )
  }
  */

  create(medecine: Medecine) {
    return this.http.post(this.getUrl(), medecine);
  }

  update(medecine: Medecine) {
    return this.http.patch(this.getUrlForId(medecine.medecineId), medecine);
  }

  delete(medecine: Medecine) {
    return this.http.delete(this.getUrlForId(medecine.medecineId));
  }
}

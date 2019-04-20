import { environment } from "./../../../environments/environment.prod";
import { Perscription } from "./../models/perscription";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class PerscriptionService {
  private model = "perscription";

  getUrl(): string {
    return `${environment.server}${this.model}`;
  }

  getUrlForId(id): string {
    return `${this.getUrl()}/${id}`;
  }

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Perscription[]>(this.getUrl());
  }

  load(id) {
    return this.http.get<Perscription>(this.getUrlForId(id));
  }

  create(perscription: Perscription) {
    return this.http.post(this.getUrl(), perscription);
  }

  update(perscription: Perscription) {
    return this.http.patch(
      this.getUrlForId(perscription.perscriptionID),
      perscription
    );
  }

  delete(perscription: Perscription) {
    return this.http.delete(this.getUrlForId(perscription.perscriptionID));
  }
}

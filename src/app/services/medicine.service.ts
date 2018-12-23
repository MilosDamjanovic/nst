import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class MedicineService extends DataService {
  private medicineUrl = 'medicine';
  constructor(http: Http) {
    super('http://localhost:8080/medicine', http);
  }
}

import { MedicineService } from './../services/medicine.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'medicine-table',
  templateUrl: './medicine-table.component.html',
  styleUrls: ['./medicine-table.component.css']
})
export class MedicineTableComponent implements OnInit {

  //bindovanje propertija lekova sa tabelom
  //iz forme da se ubaci u tabelu, dinamicki
  //imacu 2 tabele, jedna za bazu, druga za nove lekove

  medicines: any[];

  constructor(
    //private medicineService: MedicineService
  ) { }


  ngOnInit() {
  //  this.medicineService.getAll().subscribe(medicine => this.medicines = medicine);
  }

}

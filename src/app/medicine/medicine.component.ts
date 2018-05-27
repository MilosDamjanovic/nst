import { MedicineService } from './../services/medicine.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material';
import { MedicineDialogComponent } from './medicine-table/medicine.dialog.component';

@Component({
  selector: 'nst-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  medicine: any[];

//  private medicineService: MedicineService

  constructor(private dialog: MatDialog, private medicineService: MedicineService) { }

  ngOnInit() {
   /* this.medicineService.getAll().subscribe(medicine=>this.medicine=medicine);
    console.log(this.medicine);
    */
  }
  // drugi validator je async validator fn

  submitMedicine() {
    const dialogRef = this.dialog.open(MedicineDialogComponent, {
      data: {
        // podaci iz forme
      }
    });
    dialogRef.afterClosed().subscribe(result =>  {
      if (result) {
       return; // nesto
      } else {
        return;
      }
    });
  }

}

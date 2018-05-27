import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'nst-medicine-dialog',
  templateUrl: './medicine-dialog.component.html',
  styleUrls: ['./medicine-dialog.component.css']
})
export class MedicineDialogComponent implements OnInit {

medicineForm;

  // injectovanje objekta
  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) { }


  ngOnInit() {
   this.medicineForm = new FormGroup({
      medicineName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      manufacturer: new FormControl('', [Validators.required, Validators.minLength(4)]),
      composition: new FormControl('', [Validators.required]),
      currency: new FormGroup({
        price: new FormControl('', [
          Validators.required,
          Validators.minLength(2)]
          ),
      }),
      quantity: new FormControl('0', Validators.required),
      dates: new FormGroup({
        expirationDate: new FormControl(),
        productionDate: new FormControl()
      })
    });
  }

  get medicineName() {
    return this.medicineForm.get('medicineName');
  }

  get manufacturer() {
    return this.medicineForm.get('manufacturer');
  }

  get composition() {
    return this.medicineForm.get('composition');
  }
  get price() {
    return this.medicineForm.get('currency').get('price');
  }
  get quantity() {
    return this.medicineForm.get('quantity');
  }

// klikni na dugme i otvori mu dialog za unos lekova
// medicine treba da prikaze tablelarno sve lekove
}

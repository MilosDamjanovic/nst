import { MedicineService } from './../services/medicine.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  medicine: any[];

//  private medicineService: MedicineService

  constructor() { }

  ngOnInit() {
   /* this.medicineService.getAll().subscribe(medicine=>this.medicine=medicine);
    console.log(this.medicine);
    */
  }
  // drugi validator je async validator fn

  medicineForm = new FormGroup({
    medicineName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    manufacturer: new FormControl('', [Validators.required, Validators.minLength(4)]),
    composition: new FormControl('',[Validators.required]),
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

  get medicineName() {
    return this.medicineForm.get('medicineName');
  }

  get manufacturer(){
    return this.medicineForm.get('manufacturer');
  }

  get composition(){
    return this.medicineForm.get('composition');
  }
  get price(){
    return this.medicineForm.get('currency').get('price');
  }
  get quantity(){
    return this.medicineForm.get('quantity');
  }

  submitMedicine() {

  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicineService } from './../../services/medicine.service';
import { NumberValidators } from '../../shared/number.validator';
import { Medicine } from '../../model/medicine';

@Component({
  selector: 'nst-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.css']
})
export class MedicineDetailComponent implements OnInit {
  pageTitle = 'Add medicine';
  medicineForm: FormGroup;
  medicine: Medicine;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              // private medecineService: MedecineService
              ) { }

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
       quantity: new FormControl('0', [Validators.required, NumberValidators.range(1, 10)]),
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

   isMedicineFormControlValid(c: AbstractControl): boolean {
     return c.invalid && (c.touched || c.dirty);
   }

  onBack(): void {
    this.router.navigate(['/medicines']);
  }

  /*
  getProduct(id: number): void {
    this.medicineService.getProduct(id)
      .subscribe(
        (medicine: Medicine) => this.displayMedicine(medicine),
        (error: any) => this.errorMessage = <any>error
      );
  }
  */

  displayMedicine(medicine: Medicine): void {
    if (this.medicineForm) {
      this.medicineForm.reset();
    }
    this.medicine = medicine;

    if (this.medicine.medicineID === 0) {
      this.pageTitle = 'Add medicine';
    } else {
      this.pageTitle = `Edit Medecine: ${this.medicine.name}`;
    }

    // Update the data on the form
    // price, nested?
    this.medicineForm.patchValue({
      medicineName: this.medicine.name,
      manufacturer: this.medicine.manufacturer,
      composition: this.medicine.composition,
     // currency: this.medicine.curr
      quantity: this.medicine.quantity
    });
    // form array
    // this.medicineForm.setControl('tags', this.fb.array(this.medicine.tags || []));
  }


  deleteMedicine(): void {
      /*
    if (this.medicine.medicineID === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the product: ${this.medicine.name}?`)) {
        this.medicineService.deleteProduct(this.medicine.id)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
      */
  }

  saveMedecine(): void {
    if (this.medicineForm.valid) {
      if (this.medicineForm.dirty) {
        const m = { ...this.medicine, ...this.medicineForm.value };

        /*
        if (p.id === 0) {
          this.medicineService.createProduct(p)
            .subscribe(
              () => this.onSaveComplete(),
              (error: any) => this.errorMessage = <any>error
            );
        } else {
          this.medicineService.updateProduct(p)
            .subscribe(
              () => this.onSaveComplete(),
              (error: any) => this.errorMessage = <any>error
            );
        }
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
    */
      }
    }
  }
    onSaveComplete(): void {
      // Reset the form to clear the flags
      this.medicineForm.reset();
      this.router.navigate(['/medicines']);
    }
}

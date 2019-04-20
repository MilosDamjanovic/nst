import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "nst-medicine-dialog",
  templateUrl: "./medicine-dialog.component.html",
  styleUrls: ["./medicine-dialog.component.scss"]
})
export class MedicineDialogComponent {
  medicineForm;

  // injectovanje objekta
  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {}

  // klikni na dugme i otvori mu dialog za unos lekova
  // medicine treba da prikaze tablelarno sve lekove
}

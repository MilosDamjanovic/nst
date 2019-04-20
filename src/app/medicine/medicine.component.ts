import { NotificationsService } from "../shared/services/notification/notifications.service";
import { MedecineHelper } from "./medecine-helper";
import { Medecine } from "../shared/models/medecine";
import { ActivatedRoute, Router } from "@angular/router";
import { NumberValidators } from "../shared/validators/number.validator";
import { MedicineService } from "../shared/services/medicine.service";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormControlName
} from "@angular/forms";
import { MatDialog } from "@angular/material";
import { MedicineDialogComponent } from "./medicine-list/medicine.dialog.component";
import { Util } from "../shared/util";

@Component({
  selector: "nst-medicine",
  templateUrl: "./medicine.component.html",
  styleUrls: ["./medicine.component.scss"]
})
export class MedicineComponent implements OnInit {
  pageTitle = "Please enter new medecine";
  // medicine: Medecine[];
  medecineForm: FormGroup;
  medecineID;
  packages: any[] = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" }
  ];

  //  private medicineService: MedicineService

  constructor(
    private dialog: MatDialog,
    private medicineService: MedicineService,
    private fb: FormBuilder,
    private notificationsService: NotificationsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    /* this.medicineService.getAll().subscribe(medicine=>this.medicine=medicine);
    console.log(this.medicine);
    */
    // dates should be in a formGroup!
    this.medecineForm = this.fb.group({
      MedecineName: [
        "",
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      ],
      Quantity: ["", Validators.required],
      Price: ["", NumberValidators.range(1, 5)],
      Composition: ["", Validators.maxLength(500)],
      Package: ["", Validators.required],
      ExpirationDate: null,
      ProductionDate: null
    });
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  saveMedecine(): void {
    const medecine = MedecineHelper.getMedecine(this.medecineForm);
    if (!medecine.ProductionDate) {
      // medecine.ProductionDate = Medecine.getCurrentDate();
    }
    this.medicineService.create(medecine).subscribe(
      res => {
        Util.logger(res);
        this.notificationsService.emit("Medecine successfully created");
      },
      err => {
        Util.logger(err);
        this.notificationsService.emit(err);
      }
    );

    /*
    const dialogRef = this.dialog.open(MedicineDialogComponent, {
      data: {
        // podaci iz forme
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        return; // nesto
      } else {
        return;
      }
    });
    */
  }

  updateMedecine(): void {}

  deleteMedecine(): void {}

  /** code which will be used for displaying individual data about the medicine */
  // Update the data on the form
  /*
    this.medecineForm.patchValue({
      MedecineName: this.medecine.medecineName,
      productCode: this.product.productCode,
      starRating: this.product.starRating,
      description: this.product.description
    });
    */

  get details(): any {
    return this.medecineForm.value;
  }
}

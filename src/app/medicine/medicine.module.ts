import { MedicineListComponent } from "./medicine-list/medicine-list.component";
import { MedicineRoutingModule } from "./medicine-routing.module";
import { MedicineDetailComponent } from "./medicine-detail/medicine-detail.component";
import { MedicineComponent } from "./medicine.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MaterialModule } from "./../material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    MedicineRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    MedicineComponent,
    MedicineDetailComponent,
    MedicineListComponent
  ],
  providers: []
})
export class MedicineModule {}

import { PerscriptionListComponent } from "./perscription-list/perscription-list.component";
import { PerscriptionRoutingModule } from "./perscription-routing.module";
import { PerscriptionComponent } from "./perscription.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MaterialModule } from "./../material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    PerscriptionRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [PerscriptionComponent, PerscriptionListComponent],
  providers: []
})
export class PerscriptionModule {}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BillComponent } from "./bill/bill.component";
import { LoginFormComponent } from "./login-form/login-form.component";

const routes: Routes = [
  {
    path: "bills",
    component: BillComponent
  },
  {
    path: "medecine",
    loadChildren: "./medicine/medicine.module#MedicineModule"
  },
  {
    path: "perscription",
    loadChildren: "./perscription/perscription.module#PerscriptionModule"
  },
  {
    path: "",
    component: LoginFormComponent
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { Perscription } from './model/perscription';
import { LoginFormComponent } from './login-form/login-form.component';
import { MedicineComponent } from './medicine/medicine.component';
import { BillComponent } from './bill/bill.component';
import {PerscriptionComponent} from './perscription/perscription.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'bills',
    component: BillComponent
  },
  {
    path: 'medicine/:name',
    component: MedicineComponent
  },
  {
    path: 'medicine/:manufacturer',
    component: MedicineComponent
  },
  {
    path: 'medicine',
    component: MedicineComponent
  },
  {
    path: 'perscription',
    component: PerscriptionComponent
  },
  {
    path: '',
    component: LoginFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}


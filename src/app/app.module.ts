import { NavBarComponent } from './navigation/nav-bar/nav-bar.component';
import { MedicineTableComponent } from './medicine/medicine-table/medicine-table.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { MedicineService } from './services/medicine.service';
import { Perscription } from './model/perscription';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MaterialModule} from './material.module';
import {AppRoutingModule} from './app-routing.module';


import { AppComponent } from './app.component';
import { PerscriptionFormComponent } from './perscription-form/perscription-form.component';
import { MedicineComponent } from './medicine/medicine.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BillComponent } from './bill/bill.component';
import { BillItemComponent } from './bill-item/bill-item.component';
import { PerscriptionComponent } from './perscription/perscription.component';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import {MedicineDialogComponent} from './medicine/medicine-table/medicine.dialog.component';
import { AuthenticationService } from './services/authentication.service';
import { MedicineDetailComponent } from './medicine/medicine-detail/medicine-detail.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    PerscriptionFormComponent,
    MedicineComponent,
    MedicineTableComponent,
    NavBarComponent,
    LoginFormComponent,
    BillComponent,
    BillItemComponent,
    PerscriptionComponent,
    SideNavComponent,
    MedicineDetailComponent,
    MedicineDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [MedicineService, AuthenticationService],
  bootstrap: [AppComponent],
  entryComponents: [MedicineDialogComponent]
})
export class AppModule { }

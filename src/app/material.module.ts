// this is the extraceed material
// MATERIAL PACKAGE IMPORTS AND EXPORTS\
// func

import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatInput,
  MatChipsModule,
  MatCheckbox,
  MatTableDataSource,
  MatFormField,
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatTableModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
} from "@angular/material";

import { MatDatepickerModule } from "@angular/material/datepicker";

@NgModule({
  imports: [
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatTableModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class MaterialModule {}

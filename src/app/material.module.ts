// this is the extraceed material
// MATERIAL PACKAGE IMPORTS AND EXPORTS\
// func

import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatChipsModule,
  MatTableDataSource,
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatTableModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatListModule,
  MatPaginatorModule,
  MatSortModule,
  MatCardModule,
  MatGridListModule,
  MatOptionModule,
  MatSelectModule,
  MatSnackBarModule
} from "@angular/material";

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
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatListModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatOptionModule,
    MatSelectModule,
    MatSnackBarModule
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
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatListModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatGridListModule,
    MatSnackBarModule
  ]
})
export class MaterialModule {}

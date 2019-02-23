// this is the extraceed material
// MATERIAL PACKAGE IMPORTS AND EXPORTS\
// func
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
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
} from '@angular/material';



@NgModule({
  imports: [
    BrowserAnimationsModule,
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
    MatGridListModule,
  ]
})
export class MaterialModule {}

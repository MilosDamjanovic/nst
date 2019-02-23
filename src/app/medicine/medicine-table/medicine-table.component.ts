
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MedicineService } from '../../services/medicine.service';
import { MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { Medicine } from '../../model/medicine';

@Component({
  selector: 'nst-medicine-table',
  templateUrl: './medicine-table.component.html',
  styleUrls: ['./medicine-table.component.scss']
})
export class MedicineTableComponent implements OnInit, AfterViewInit {

  // bindovanje propertija lekova sa tabelom
  // iz forme da se ubaci u tabelu, dinamicki

  displayedColumns = ['ID', 'Name', 'Manufacturer', 'Composition', 'Quantity', 'Price', 'Production date'];
  dataSource = new MatTableDataSource<Medicine>();
  medicines: any[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private medicineService: MedicineService) { }


  ngOnInit() {
  //  this.medicineService.getAll().subscribe(medicine => this.medicines = medicine);
  //  this.dataSource.data = this.medicines;
   // this.medicineService.getAll().subscribe(medicine => this.medicines = medicine);
  }
  ngAfterViewInit() {
    // sortiranje tabela
      // this.dataSource.sort = this.sort;
    // paginator
      // this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

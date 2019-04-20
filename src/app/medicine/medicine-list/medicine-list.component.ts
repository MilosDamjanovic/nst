import { LIST_ANIMATION } from "./medecine-list.animations";
import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  AfterViewInit
} from "@angular/core";
import { MedicineService } from "../../shared/services/medicine.service";
import { MatPaginator, MatTableDataSource, MatSort } from "@angular/material";
import { Medecine } from "../../shared/models/medecine";

@Component({
  selector: "nst-medicine-list",
  templateUrl: "./medicine-list.component.html",
  styleUrls: ["./medicine-list.component.scss"],
  animations: [LIST_ANIMATION]
})
export class MedicineListComponent implements OnInit, AfterViewInit {
  @Input() medecines: Medecine[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  // bindovanje propertija lekova sa tabelom
  // iz forme da se ubaci u tabelu, dinamicki

  displayedColumns = [
    "ID",
    "Name",
    "Manufacturer",
    "Composition",
    "Quantity",
    "Price",
    "Production date"
  ];
  dataSource = new MatTableDataSource<Medecine>();
  animationsDisabled = true;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private medicineService: MedicineService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.animationsDisabled = false;
    }, 500);
    //  this.medicineService.getAll().subscribe(medicine => this.medicines = medicine);
    //  this.dataSource.data = this.medicines;
    // this.medicineService.getAll().subscribe(medicine => this.medicines = medicine);
  }
  ngAfterViewInit(): void {
    // sortiranje tabela
    // this.dataSource.sort = this.sort;
    // paginator
    // this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  trackMedecine(index, medecine): void {
    return medecine.id;
  }

  prepareListState(): any {
    return this.medecines ? this.medecines.length : "pending";
  }
}

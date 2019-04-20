import { Medecine } from "../shared/models/medecine";
import { FormGroup, FormControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "nst-bill-item",
  templateUrl: "./bill-item.component.html",
  styleUrls: ["./bill-item.component.scss"]
})
export class BillItemComponent implements OnInit {
  medicine: Medecine;
  billItemForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.billItemForm = new FormGroup({
      quantity: new FormControl("")
    });
  }
}

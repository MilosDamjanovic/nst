import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Medicine } from '../model/medicine';

@Component({
  selector: 'nst-bill-item',
  templateUrl: './bill-item.component.html',
  styleUrls: ['./bill-item.component.scss']
})
export class BillItemComponent implements OnInit {
  medicine: Medicine;
  billItemForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.billItemForm = new FormGroup({
      quantity: new FormControl('')
    });
  }

}

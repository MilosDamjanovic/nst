import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bill-item',
  templateUrl: './bill-item.component.html',
  styleUrls: ['./bill-item.component.css']
})
export class BillItemComponent implements OnInit {



  billItemForm = new FormGroup({
    medicine: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  
}

import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BillItem } from '../model/bill-item';

@Component({
  selector: 'nst-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  billItems: BillItem[];

  public visibleBillItem = false;
  public visibleAnimate = false;

  billForm = new FormGroup({
    issueDate: new FormControl('')
  });
  billItemForm = new FormGroup({
    medicine: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  public show(): void {
    this.visibleBillItem = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visibleBillItem = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }


}

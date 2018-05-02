import { BillItem } from "./bill-item";

export class Bill {
  constructor(
    private billID: number,
    private issue_date: string,
    private issue_place: string,
    private sum: number,
    private billItem: BillItem
  ) {  }
}

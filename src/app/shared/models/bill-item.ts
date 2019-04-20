export class BillItem {

  constructor(
    private itemID: number,
    private quantity: number,
    private valueAddedTax: number,
    private taxFreeeValue: number,
    private totalSum: number,
  ) { }
}

export class Medicine {

  private _name: string;
  private _manufacturer: string;
  private _composition: string;
  private _packing: string;
  private _price: number;
  private _quantity: string;
  private _expiraionDate: Date;
  private _productionDate: Date;

  constructor() {

  }

  private _medicineID: number;

  get medicineID(): number {
    return this._medicineID;
  }

  set medicineID(value: number) {
    this._medicineID = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get manufacturer(): string {
    return this._manufacturer;
  }

  set manufacturer(value: string) {
    this._manufacturer = value;
  }

  get composition(): string {
    return this._composition;
  }

  set composition(value: string) {
    this._composition = value;
  }

  get packing(): string {
    return this._packing;
  }

  set packing(value: string) {
    this._packing = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get quantity(): string {
    return this._quantity;
  }

  set quantity(value: string) {
    this._quantity = value;
  }

  get expiraionDate(): Date {
    return this._expiraionDate;
  }

  set expiraionDate(value: Date) {
    this._expiraionDate = value;
  }

  get productionDate(): Date {
    return this._productionDate;
  }

  set productionDate(value: Date) {
    this._productionDate = value;
  }

}

export class Perscription {
    constructor(
      private perscriptionID: number,
      health_institution: string,
      issue_date: string,
      diagnosis: string,
      doctorSignature: string,
      institution: string
    ) { }
}

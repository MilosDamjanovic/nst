import { Medecine } from "../shared/models/medecine";
import { FormGroup } from "@angular/forms";

export class MedecineHelper {
  public static getMedecine(form: FormGroup): Medecine {
    const medecine = new Medecine();

    const details = form.value;
    /*
  if (medecineID || details["medecineId"]) {
    medecine.medecineId = this.medecineID || details["medecineId"];
  }
  */
    medecine.medecineName = details["MedecineName"];
    medecine.Quantity = details["Quantity"];
    medecine.Package = details["Package"];
    medecine.Price = details["Composition"];
    medecine.medecineName = details["ExpirationDate"];
    medecine.medecineName = details["ProductionDate"];

    return medecine;
  }
}

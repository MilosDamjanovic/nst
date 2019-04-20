import { environment } from "./../../environments/environment.prod";
export class Util {
  public static logger(message: any, ...params: any[]): void {
    if (!environment.production && environment.debug) {
      if (params.length === 0) {
        // tslint:disable-next-line:no-console
        console.log(message);
      } else {
        // tslint:disable-next-line:no-console
        console.log(message, params);
      }
    }
  }
}

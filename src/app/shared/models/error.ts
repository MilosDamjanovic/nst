import { HttpErrorResponse } from '@angular/common/http';

export class PharmacyError {
  httpStatus: string;
  request: string;
  code: number;
  message: string;

  constructor(error: HttpErrorResponse | any, code?: number) {
    if (error.error) {
      const err = error.error;
      this.code = err.ErrorCode;
      this.message = err.Cause;
      this.httpStatus = `${error.status} - ${error.statusText || ''}`;
    } else {
      this.message = error.message ? error.message : error.toString();
      if (code) {
          this.code = code;
      }
    }
  }
}

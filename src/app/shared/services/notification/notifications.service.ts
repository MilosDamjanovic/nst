import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Injectable({
  providedIn: "root"
})
export class NotificationsService {
  constructor(private snackbar: MatSnackBar) {}

  emit(notification): void {
    this.snackbar.open(notification, "OK", { duration: 3000 });
  }
}

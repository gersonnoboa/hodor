import { MatSnackBar } from "@angular/material/snack-bar";

export class General {
  static show(snackBar: MatSnackBar, message: string) {
    snackBar.open(message,
      "OK",
      {
        duration: 4000,
        verticalPosition: 'top'
      })
  }

  static showGeneralError(snackBar: MatSnackBar) {
    General.show(snackBar, "An error has occurred. Please try again later.");
  }
}

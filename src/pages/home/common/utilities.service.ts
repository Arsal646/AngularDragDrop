import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(
    private _snackBar: MatSnackBar,
  ) { }


  errorMessage(msg:any){
    this._snackBar.open(`${msg}`,'Error',{
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['error'],
    })
  }
  successMessage(msg:any){
    this._snackBar.open(`${msg}`,'Success',{
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['error'],
    })
  }
}

import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnacbarService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  duration: number = 2000;

  constructor(
    private snacBar: MatSnackBar
  ) { }

  error(message: string){
    this.snacBar.open(`${message}`,
    '', 
    {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.duration,
      panelClass: ['warn-color']
    })
  }

  success(message: string){
    this.snacBar.open(`${message}`,
    '', 
    {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.duration,
      panelClass: ['success-color']
    })
  }

}

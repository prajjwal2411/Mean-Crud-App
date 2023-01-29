import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditEmployeeService {

  private url: string = environment.employeeUrl;

  constructor(
    private http: HttpClient
  ) { }

  editEmployee(employeeData: any, employeeId: string){
    return this.http.patch(`${this.url}/edit-employee/${employeeId}/`, employeeData).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error: any) => {
        return error;
      })
    )
  }
}

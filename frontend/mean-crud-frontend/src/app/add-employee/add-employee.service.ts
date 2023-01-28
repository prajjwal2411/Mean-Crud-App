import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {
  
  private url: string = environment.employeeUrl;
  
  constructor(
    private http: HttpClient
  ) { }

  addEmployee(employeeDetails: object){
    return this.http.post(`${this.url}/add-employee/`, employeeDetails).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error: any) => {
        return error;
      })
    )
  }
}

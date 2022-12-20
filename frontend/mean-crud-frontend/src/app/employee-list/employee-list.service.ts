import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  private url: string = environment.employeeUrl;

  constructor(
    private http: HttpClient
  ) { }

  getEmployees(){
    return this.http.get(`${this.url}/get-employees/`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error: any) => {
        return error;
      })
    )
  }


}

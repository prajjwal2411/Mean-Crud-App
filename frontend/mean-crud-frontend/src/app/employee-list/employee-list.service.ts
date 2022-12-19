import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  private url: string = environment.employeeUrl;

  constructor(
    private http: HttpClient
  ) { }

  getEmployees(){
    this.http.get(`${this.url}/get-employees/`).subscribe((response: any) => {
      return response;
    }, (error: any) => {
      return error;
    });
  }


}

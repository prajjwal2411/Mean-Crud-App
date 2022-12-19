import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from './employee-list.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  displayedColumns: string[] = ['S. No.', 'Employee ID', 'Name', 'Skills', 'Department', 'Gender'];
  dataSource: any;

  constructor(
    public employeeListService: EmployeeListService
  ) { }

  ngOnInit(): void {
  }
  
  getAllEmployees(){
    this.employeeListService.getEmployees()
  }

}

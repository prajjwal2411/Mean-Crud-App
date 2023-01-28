import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from './employee-list.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  displayedColumns: string[] = ['S. No.', 'Name', 'Skills', 'Department', 'Gender'];
  dataSource: any;

  constructor(
    private employeeListService: EmployeeListService,
    
  ) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }
  
  getAllEmployees(){
    this.employeeListService.getEmployees().subscribe((response: any) => {
      this.dataSource = response;
    }, (error: any) => {
      console.log(`Unable to Fetch Data: ${error}`);
    });
  }

}

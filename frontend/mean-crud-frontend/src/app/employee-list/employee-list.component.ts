import { Component, OnInit } from '@angular/core';
import { SnacbarService } from 'src/shared/snackbar-service/snacbar.service';
import { EmployeeListService } from './employee-list.service';
import { MatDialog } from '@angular/material/dialog'
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit{

  displayedColumns: string[] = ['S. No.', 'Name', 'Age', 'Gender', 'Email', 'Contact No.', 'Address 1', 'Address 2', 'Country', 'State', 'City', 'Pincode'];
  dataSource: any;

  constructor(
    private employeeListService: EmployeeListService,
    private snacBar: SnacbarService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }
  
  getAllEmployees(){
    console.log(this.dataSource)
    this.employeeListService.getEmployees().subscribe((response: any) => {
      this.dataSource = response;
    }, (error: any) => {
      this.snacBar.error(`Unable to Fetch Data: ${error}`);
    });
  }

  deleteEmployee(employeeId: string){
    this.employeeListService.deleteEmployee(employeeId).subscribe((response: any) => {
      this.snacBar.success(response.message);
      this.getAllEmployees();
    }, (error: any) => {
      this.snacBar.error(`Unable to Delete Employee: ${error}`);
    })
  }

  openUpdateEmployeeModal(employeeData: object){
    let currenDialog = this.dialog.open(EditEmployeeComponent, {data: {employeeData: employeeData}});
    currenDialog.afterClosed().subscribe(result => {
      this.getAllEmployees();
    })
  }
}

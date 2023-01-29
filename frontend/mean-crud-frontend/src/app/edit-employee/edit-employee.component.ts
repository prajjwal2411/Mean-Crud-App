import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { EditEmployeeService } from './edit-employee.service';
import { SnacbarService } from 'src/shared/snackbar-service/snacbar.service';
import { EmployeeListService } from '../employee-list/employee-list.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  firstName: string = '';

  constructor(
    private dialogRef: MatDialogRef<EditEmployeeComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public employeeData: any,
    private editEmployeeService: EditEmployeeService,
    private snacBar: SnacbarService,
    private dialog: MatDialog
  ) {
    this.employeeData = employeeData.employeeData;
  }

  employeeForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    skills: ['', Validators.required],
    department: ['', Validators.required],
    gender: ['', Validators.required]
  });

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      firstName: [this.employeeData.firstName, Validators.required],
      lastName: [this.employeeData.lastName, Validators.required],
      skills: [this.employeeData.skills, Validators.required],
      department: [this.employeeData.department, Validators.required],
      gender: [this.employeeData.gender, Validators.required]
    });
  }

  onSubmit(){
    console.log(this.employeeForm.value);
    this.editEmployeeService.editEmployee(this.employeeForm.value, this.employeeData._id).subscribe((response: any) => {
      this.snacBar.success(response.message);
      this.dialog.closeAll();
    }, (error: any) => {
      this.snacBar.error(`Unable to Update Employee Info: ${error}`);
    })
  }
}

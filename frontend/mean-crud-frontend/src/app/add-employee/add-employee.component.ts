import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnacbarService } from 'src/shared/snackbar-service/snacbar.service';
import { AddEmployeeService } from './add-employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private addEmployeeService: AddEmployeeService,
    private router: Router,
    private snacBar: SnacbarService
    ) { }

  employeeForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    skills: ['', Validators.required],
    department: ['', Validators.required],
    gender: ['', Validators.required]
  });

  ngOnInit(): void {}

  onSubmit() {
    this.addEmployeeService.addEmployee(this.employeeForm.value).subscribe((response: any) => {
      console.log(`Employee Added Successfully`);
      this.router.navigate(['/']);
    }, (error: any) => {
      this.snacBar.error(`Unable to Add Employee`);
    });
  }

}

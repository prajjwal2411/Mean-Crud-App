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
    name: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/), Validators.minLength(2)]],
    age: ['', [Validators.required, Validators.pattern(/^[1-9]+$/), Validators.min(0)]],
    gender: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    contact: ['', [Validators.required, Validators.pattern(/^[789]\d{9}$/)]],
    addressOne: ['', [Validators.required]],
    addressTwo: ['', [Validators.required]],
    country: ['', [Validators.required]],
    state: ['', [Validators.required]],
    city: ['', [Validators.required]],
    pincode: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]{5}$/)]],
  });

  ngOnInit(): void {}

  onSubmit() {
    this.addEmployeeService.addEmployee(this.employeeForm.value).subscribe((response: any) => {
      this.snacBar.success(response.message);
      this.router.navigate(['/']);
    }, (error: any) => {
      this.snacBar.error(`Unable to Add Employee: ${error}`);
    });
  }

}

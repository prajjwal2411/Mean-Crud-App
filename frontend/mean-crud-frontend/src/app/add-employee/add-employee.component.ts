import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  employeeForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    skills: ['', Validators.required],
    department: ['', Validators.required],
    gender: ['', Validators.required]
  })

  ngOnInit(): void {
    console.log(this.employeeForm.invalid)
  }

  onSubmit() {
    console.log(this.employeeForm.value);
  }

}

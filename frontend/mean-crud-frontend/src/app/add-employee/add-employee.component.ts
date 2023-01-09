import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm = new FormGroup({
    
    firstName: new FormControl(),
    lastName: new FormControl(),
    skills: new FormControl(),
    department: new FormControl(),
    gender: new FormControl()

  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.employeeForm.value);
  }

}

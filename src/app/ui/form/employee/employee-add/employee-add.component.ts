import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../../../services/employee.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {gender} from '../../../../models/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  addForm: FormGroup;
  genders = gender;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.addForm = this.fb.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required]
    });
  }
  onSubmit() {
    /*this.employeeService.createEmployee(this.addForm.value).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['employee-list']);
      }
    );*/
  }
}

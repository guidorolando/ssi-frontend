import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../../models/employee.model';
import {EmployeeService} from '../../../../services/employee.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employee: Employee;
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService
  ) {
  }

  ngOnInit(): void {
    const employeeId = localStorage.getItem('employeeId');
    if (!employeeId) {
      console.log('Invalid Action');
      this.router.navigate(['employee-list']);
      return;
    }
    this.editForm = this.fb.group({
      id: [],
      address: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    this.employeeService.getEmployeeById(+employeeId)
      .subscribe(data => {
        console.log(data);
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.editForm.value).pipe(first()).subscribe(
      data => {
        this.router.navigate(['employee-list']);
      },
      error => {
        console.log(error);
      }
    );
  }
}

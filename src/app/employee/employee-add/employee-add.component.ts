
import {EmployeeService} from '../../services/employee.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Employee, gender} from '../../models/employee.model';
import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  employee: Employee;
  // addForm: FormGroup;
  private isValid: Boolean = true;
  private  message: String = '';
  genders = gender;
  public closeEvent = new EventEmitter<boolean>();
  constructor(private employeeService: EmployeeService, private  router: Router) {
    this.employee = new Employee();
  }
  ngOnInit() {
  }
  public saveEmployee(): void {
    this.isValid = this.employeeService.validate(this.employee);
    if (this.isValid) {
      console.log('lalala', this.employee);
      this.employeeService.createEmployee(this.employee).subscribe(res => {
        this.closeEmployee();
      });
    } else {
      this.message = 'los camos son obligatorios';
    }
  }

  closeEmployee() {
    this.closeEvent.next(true);
  }

 /* public closeEvent = new EventEmitter<boolean>();
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
    this.employeeService.createEmployee(this.addForm.value).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['employee-list']);
      }
    );
  }*/

}

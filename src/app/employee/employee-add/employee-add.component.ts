
import {EmployeeService} from '../../services/employee.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Employee, gender} from '../../models/employee.model';
import {Component, EventEmitter, OnInit} from '@angular/core';
import {EmployeeTypeService} from '../../services/employee-type.service';
import {EmployeeType} from '../../models/employee-type.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-add-employee',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  employee: Employee;
  employeeTypes$: Observable<any>;
  // isLoading = false;
  // selectedEmployeeType: EmployeeType;
  // addForm: FormGroup;
  private isValid: Boolean = true;
  private  message: String = '';
  genders = gender;
  public closeEvent = new EventEmitter<boolean>();
  constructor(private employeeService: EmployeeService,
              private  router: Router,
              private employeeTypeService: EmployeeTypeService) {
    this.employee = new Employee();
  }
  ngOnInit() {
    this.getEmployeesType();
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

  getEmployeesType() {
    // this.isLoading = true;
    this.employeeTypes$ = this.employeeTypeService.getEmployeesType();
    console.log('type employee:', this.employeeTypes$);
    // this.selectedEmployeeType = undefined;
  }

  /*select(employeeType: EmployeeType) {
    this.selectedEmployeeType = employeeType;
  }*/
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

import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Employee} from '../../../../models/employee.model';
import {EmployeeService} from '../../../../services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]>;
  isLoading = false;
  selectedEmployee: Employee;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.isLoading = true;
    this.employees$ = this.employeeService.getEmployees();
    this.selectedEmployee = undefined;
  }
  select(employee: Employee) {
    this.selectedEmployee = employee;
  }
}

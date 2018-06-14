
import {Observable} from 'rxjs/Observable';
import {Employee} from '../../models/employee.model';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {EmployeeType} from '../../models/employee-type.model';
import {MaterialTypeAddComponent} from '../../material-type/material-type-add/material-type-add.component';
import {EmployeeTypeService} from '../../services/employee-type.service';
import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-employee-type-list',
  templateUrl: './employee-type-list.component.html',
  styleUrls: ['./employee-type-list.component.css']
})
export class EmployeeTypeListComponent implements OnInit {

  employeeTypes$: Observable<EmployeeType[]>;
  isLoading = false;
  selectedEmployeeType: EmployeeType;
  modalRef: BsModalRef;
  constructor(private employeeTypeService: EmployeeTypeService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getEmployeesType();
  }

  getEmployeesType() {
    this.isLoading = true;
    this.employeeTypes$ = this.employeeTypeService.getEmployeesType();
    console.log('type employee:', this.employeeTypes$);
    this.selectedEmployeeType = undefined;
  }

  select(employeeType: EmployeeType) {
    this.selectedEmployeeType = employeeType;
  }

}

import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Employee} from '../../../../models/employee.model';
import {EmployeeService} from '../../../../services/employee.service';
import {finalize} from 'rxjs/operators';
import {EmployeeAddComponent} from '../employee-add/employee-add.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-list-employee',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]>;
  isLoading = false;
  selectedEmployee: Employee;
  modalRef: BsModalRef;

  constructor(private employeeService: EmployeeService, private modalService: BsModalService) {
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

  createEmployee() {
    this.modalRef = this.modalService.show(EmployeeAddComponent, {class: 'modal-lg'});
    this.modalRef.content.isModal = true;
    this.modalRef.content.closeEvent.subscribe(
      res => this.closeEmployee(res)
    );
  }
  closeEmployee(close: boolean): void {
    if (close && this.modalRef) {
      this.modalRef.hide();
      this.modalRef.content.closeEvent.unsubscribe();
    }
  }

  addEmployee() {
  }

  deleteEmployee() {
  }

  updateEmployee() {
  }
}

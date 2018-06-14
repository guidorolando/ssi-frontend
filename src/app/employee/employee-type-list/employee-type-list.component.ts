
import {Observable} from 'rxjs/Observable';
import {Employee} from '../../models/employee.model';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {EmployeeType} from '../../models/employee-type.model';
import {MaterialTypeAddComponent} from '../../material-type/material-type-add/material-type-add.component';
import {EmployeeTypeService} from '../../services/employee-type.service';
import {Component, OnInit} from '@angular/core';
import {EmployeeEditComponent} from '../employee-edit/employee-edit.component';
import {EmployeeAddComponent} from '../employee-add/employee-add.component';
import {EmployeeTypeAddComponent} from '../employee-type-add/employee-type-add.component';
import {SharedValuesService} from '../../services/shared-values.service';
import {EmployeeTypeEditComponent} from '../employee-type-edit/employee-type-edit.component';



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
  constructor(private employeeTypeService: EmployeeTypeService,
              private modalService: BsModalService,
              private _sharedValuesService: SharedValuesService ) { }

  ngOnInit() {
    this.getEmployeesType();
  }

  getEmployeesType() {
    this.isLoading = true;
    this.employeeTypeService.getEmployeesType().subscribe(data => {
      console.log('this employee subscribe ', data);
      this.employeeTypes$ = data;
      console.log('this employee subscribe ', this.employeeTypes$);
    });

  }

  select(employeeType: EmployeeType) {
    this.selectedEmployeeType = employeeType;
  }

  createEmployeeType() {
    this.modalRef = this.modalService.show(EmployeeTypeAddComponent, {class: 'modal-lg'});
    this.modalRef.content.isModal = true;
    this.modalRef.content.closeEvent.subscribe(
      res => this.closeModal(res)
    );
  }
  closeModal(close: boolean): void {
    if (close && this.modalRef) {
      this.modalRef.hide();
      this.modalRef.content.closeEvent.unsubscribe();
    }
  }

  editTypeEmployee(employeeType: EmployeeType) {
    console.log(' edit ', employeeType);
    this._sharedValuesService.setEmployeeType$(employeeType);
    this.modalRef = this.modalService.show(EmployeeTypeEditComponent, {class: 'modal-lg'});
    this.modalRef.content.isModal = true;
    this.modalRef.content.closeEvent.subscribe(
      res => this.closeModal(res)
    );
  }
}

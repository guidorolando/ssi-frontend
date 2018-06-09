import { Component, OnInit } from '@angular/core';
import {EmployeeAddComponent} from '../ui/form/employee/employee-add/employee-add.component';
import {EmployeeService} from '../services/employee.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
// import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private employeeService: EmployeeService, private modalService: BsModalService) { }

  ngOnInit() {
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
}

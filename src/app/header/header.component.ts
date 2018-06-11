import { Component, OnInit } from '@angular/core';
import {EmployeeAddComponent} from '../employee/employee-add/employee-add.component';
import {EmployeeService} from '../services/employee.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {MaterialTypeAddComponent} from '../material-type/material-type-add/material-type-add.component';
import {MaterialTypeService} from '../services/material-type.service';
// import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  createMaterialType() {
    this.modalRef = this.modalService.show(MaterialTypeAddComponent, {class: 'modal-md'});
    this.modalRef.content.isModal = true;
    this.modalRef.content.closeEvent.subscribe(
      res => this.closeMaterialType(res)
    );
  }
  closeMaterialType(close: boolean): void {
    if (close && this.modalRef) {
      this.modalRef.hide();
      this.modalRef.content.closeEvent.unsubscribe();
    }
  }
}

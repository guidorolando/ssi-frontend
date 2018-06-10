import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../services/employee.service';
import {MaterialElementService} from '../security/services/material-element.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {MaterialTypeService} from '../services/material-type.service';
import {MaterialTypeAddComponent} from '../material-type/material-type-add/material-type-add.component';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  public employees;
  public equipments;
  public modalRef;
  constructor(private materialEq: MaterialElementService, private employeeService: EmployeeService,
              private materialTypeService: MaterialTypeService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => { console.log('employe ', data);
      this.employees = data;
    });
    this.materialEq.getMaterial().subscribe(data => {
      this.equipments = data;
    });
  }
  /*createMaterialType() {
    this.modalRef = this.modalService.show(MaterialTypeAddComponent, {class: 'modal-lg'});
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
  }*/
}

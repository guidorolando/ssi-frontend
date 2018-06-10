import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../services/employee.service';
import {MaterialElementService} from '../security/services/material-element.service';
import {BsModalService} from 'ngx-bootstrap';
import {MaterialTypeService} from '../services/material-type.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  public employees;
  public equipments;
  public modalRef;
  materialTypes: [{}];

  constructor(private materialEq: MaterialElementService, private employeeService: EmployeeService,
              private materialTypeService: MaterialTypeService, private modalService: BsModalService) {

  }

  ngOnInit() {
    this.equipments.getMaterialType().subscribe(data => {
      this.materialTypes = data;
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

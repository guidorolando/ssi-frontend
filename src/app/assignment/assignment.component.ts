import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AssignmentReportService } from '../security/services/assignment-report.service';
import { MaterialElementService } from '../security/services/material-element.service';
import { EmployeeService } from '../services/employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AssignmentService } from '../security/services/assignment.service';
import {BsModalService} from 'ngx-bootstrap';
import {MaterialTypeService} from '../services/material-type.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  materialTypes:[{}];
  public equipments;
  public modalRef;
  materials:[{}];
  employees:[{}];
  assignmentForm: FormGroup;

  constructor(private equipment: MaterialElementService,
              private employee: EmployeeService,
              private assignmentService: AssignmentService,
              private materialTypeService: MaterialTypeService, private modalService: BsModalService,
              private fa:FormBuilder) {
                this.createFormAssign();
  }

  ngOnInit() {
    this.equipment.getMaterial().subscribe(data => { this.materials = data});
    this.employee.getEmployees().subscribe(data => { this.employees = data});

    this.equipments.getMaterialType().subscribe(data => {
      this.materialTypes = data;
    });
  }

  private createFormAssign(){
    this.assignmentForm =this.fa.group({
      firstname:['',Validators.required],
      name:['',Validators.required],
      quantity:['',Validators.required]
    });
  }
  ngOnSubmit(){
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

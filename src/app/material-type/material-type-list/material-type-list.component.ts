import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Employee} from '../../models/employee.model';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {MaterialType} from '../../models/material-type.model';
import {MaterialTypeService} from '../../services/material-type.service';
import {MaterialTypeAddComponent} from '../material-type-add/material-type-add.component';

@Component({
  selector: 'app-material-type-list',
  templateUrl: './material-type-list.component.html',
  styleUrls: ['./material-type-list.component.css']
})
export class MaterialTypeListComponent implements OnInit {

  materialTypes$: Observable<MaterialType[]>;
  isLoading = false;
  selectedMaterialType: MaterialType;
  modalRef: BsModalRef;
  constructor(private materialTypeService: MaterialTypeService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getMaterialTypes();
  }

  getMaterialTypes() {
    this.isLoading = true;
    this.materialTypes$ = this.materialTypeService.getAllMaterialType();
    this.selectedMaterialType = undefined;
  }

  select(materialType: MaterialType) {
    this.selectedMaterialType = materialType;
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

  deleteMaterialType() {
  }

  updateMaterialType() {
  }
}

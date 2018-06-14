import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {MaterialType} from '../../models/material-type.model';
import {MaterialTypeService} from '../../services/material-type.service';
import {MaterialTypeAddComponent} from '../material-type-add/material-type-add.component';
import {SharedValuesService} from '../../services/shared-values.service';
import {MaterialTypeEditComponent} from '../material-type-edit/material-type-edit.component';

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
  constructor(private materialTypeService: MaterialTypeService
              , private modalService: BsModalService
              , private sharedValuesService: SharedValuesService) { }

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

  updateMaterialType(materialType: MaterialType) {
    console.log(' edit ', materialType);
     this.sharedValuesService.setMaterialTypes$(materialType);
    this.modalRef = this.modalService.show(MaterialTypeEditComponent, {class: 'modal-lg'});
    this.modalRef.content.isModal = true;
    this.modalRef.content.closeEvent.subscribe(
      res => this.closeMaterialType(res)
    );
  }
  deleteMaterialType(id: number) {
      this.materialTypeService.deleteMaterialType(id).subscribe(data => {
        alert('the material Type was delete');
      });
  }

}

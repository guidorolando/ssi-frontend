import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MaterialTypeService} from '../../services/material-type.service';
import {MaterialType} from '../../models/material-type.model';

@Component({
  selector: 'app-material-type-add',
  templateUrl: './material-type-add.component.html',
  styleUrls: ['./material-type-add.component.css']
})
export class MaterialTypeAddComponent implements OnInit {

  materialType: MaterialType;
  addForm: FormGroup;
  private isValid: Boolean = true;
  private message: String = '';
  public closeEvent = new EventEmitter<boolean>();

  constructor(private router: Router,
              private fb: FormBuilder,
              private materialTypeService: MaterialTypeService) {
      this.materialType = new MaterialType();
  }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      id: [],
      matType: ['', Validators.required]
    });
  }

  onSubmit() {
    this.materialTypeService.createMaterialType(this.addForm.value).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['material-list']);
      }
    );
  }
  closeMaterialType() {
    this.closeEvent.next(true);
  }

  public saveMaterialType(): void {
    this.isValid = this.materialTypeService.validate(this.materialType);
    if (this.isValid) {
      this.materialTypeService.createMaterialType(this.materialType).subscribe(res => {
        this.router.navigate(['materialType-list']);
        this.closeMaterialType();
      });
    } else {
      this.message = 'los camos son obligatorios';
    }
  }

}

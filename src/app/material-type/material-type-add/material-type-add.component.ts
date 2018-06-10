import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MaterialTypeService} from '../../services/material-type.service';

@Component({
  selector: 'app-material-type-add',
  templateUrl: './material-type-add.component.html',
  styleUrls: ['./material-type-add.component.css']
})
export class MaterialTypeAddComponent implements OnInit {

  addForm: FormGroup;
  public closeEvent = new EventEmitter<boolean>();

  constructor(private router: Router,
              private fb: FormBuilder,
              private materialTypeService: MaterialTypeService) {
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

}

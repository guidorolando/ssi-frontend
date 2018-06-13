import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MaterialElementService } from '../../security/services/material-element.service';
import { Material } from '../../models/material.model';
import { MaterialTypeService } from '../../services/material-type.service';
import { MaterialType } from '../../models/material-type.model';

@Component({
  selector: 'app-material-create',
  templateUrl: './material-create.component.html',
  styleUrls: ['./material-create.component.css']
})
export class MaterialCreateComponent implements OnInit {
  materialTypes: MaterialType[];
  material: Material;
  constructor(private materialElement: MaterialElementService,private  router: Router,
              private materialTypeServ: MaterialTypeService) 
  {
    this.material = new Material();
   }

  ngOnInit() {
    this.materialElement.getMaterialType().subscribe(data => { this.materialTypes = data; });
  }

  onSubmit(){
    console.log('Material:::::::::::::::::::::',this.material);
     this.material.id = 0;
     this.material.materialType = this.materialSelected(this.material.materialTypeId);
     console.log('Material:::::::::::::::::::::',this.material);
    this.materialElement.createMaterial(this.material).subscribe(
      response=>{
        console.log(response);
        this.material = new Material();
      },error=>{
        console.log(<any> error)  
      }
    );
  }

  materialSelected(idselected : number): MaterialType{
    return this.materialTypes.find(x=>x.id==idselected);
    }
}

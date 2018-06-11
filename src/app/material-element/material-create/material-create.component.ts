import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MaterialElementService } from '../../security/services/material-element.service';
import { CreateMaterial } from '../../models/create-material.model';

@Component({
  selector: 'app-material-create',
  templateUrl: './material-create.component.html',
  styleUrls: ['./material-create.component.css']
})
export class MaterialCreateComponent implements OnInit {
  materialTypes: [{}];
  newMaterial: CreateMaterial;
  constructor(private materialElement: MaterialElementService,private  router: Router) 
  {
    this.newMaterial = new CreateMaterial();
   }

  ngOnInit() {
    this.materialElement.getMaterialType().subscribe(data => { this.materialTypes = data; });
  }

  onsubmit(){
    this.materialElement.createMaterial(this.newMaterial).subscribe(
      response=>{
        this.newMaterial = response.newMaterial;
      },error=>{
        console.log(<any> error)  
      }
    );
  }
}

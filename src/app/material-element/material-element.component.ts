import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MaterialElementService } from '../security/services/material-element.service';
import { Material } from '../models/material.model';
// import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-material-element',
  templateUrl: './material-element.component.html',
  styleUrls: ['./material-element.component.css']
})
export class MaterialElementComponent implements OnInit {

  materials: [{}];
  materialId: [{}];

  constructor(private materialElement: MaterialElementService, private router:Router) { }

  ngOnInit() {
    this.materialElement.getMaterial().subscribe(data => { this.materials = data; });
    this.materialElement.getMaterialById(3).subscribe(data => { this.materialId = data; });
  }
  updateMaterial(material:Material){
    this.router.navigate(['create-edit-mat/'+ material.id]);
    console.log(material);
  }
}

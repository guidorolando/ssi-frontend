import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MaterialElementService } from '../security/services/material-element.service';
// import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-material-element',
  templateUrl: './material-element.component.html',
  styleUrls: ['./material-element.component.css']
})
export class MaterialElementComponent implements OnInit {

  public materials;

  constructor(private materialElement: MaterialElementService) { }

  ngOnInit() {
    this.materialElement.getMaterial().subscribe(data => { this.materials = data});
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MaterialElementService} from '../../security/services/material-element.service';

@Component({
  selector: 'app-material-create',
  templateUrl: './material-create.component.html',
  styleUrls: ['./material-create.component.css']
})
export class MaterialCreateComponent implements OnInit {
  materialTypes: [{}];
  constructor(private materialElement: MaterialElementService) { }

  ngOnInit() {
    this.materialElement.getMaterialType().subscribe(data => { this.materialTypes = data; });
  }
}

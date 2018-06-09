import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AssignmentReportService } from '../security/services/assignment-report.service';
import { MaterialElementService } from '../security/services/material-element.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  materialTypes:[{}];

  constructor(private  equipment: MaterialElementService) {
  }

  ngOnInit() {
    this.equipment.getMaterialType().subscribe(data => { this.materialTypes = data});
  }

}

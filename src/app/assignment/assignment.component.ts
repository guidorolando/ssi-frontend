import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AssignmentReportService } from '../security/services/assignment-report.service';
import { MaterialElementService } from '../security/services/material-element.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  materials:[{}];
  employees:[{}];

  constructor(private  equipment: MaterialElementService,
              private  employee: EmployeeService) {
  }

  ngOnInit() {
    this.equipment.getMaterial().subscribe(data => { this.materials = data});
    this.employee.getEmployees().subscribe(data => { this.employees = data});
  }

}

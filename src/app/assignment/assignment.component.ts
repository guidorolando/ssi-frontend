import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { MaterialElementService } from '../security/services/material-element.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  public employees;
  public equipments;
  constructor(private materialEq:MaterialElementService) { }

  ngOnInit() {

    this.materialEq.getMaterial().subscribe(data => { this.equipments = data});
    //this.employeeAssign.getEmployees().subscribe(data => { this.employees = data});
  }

}

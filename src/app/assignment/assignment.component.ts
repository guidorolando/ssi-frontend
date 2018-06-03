import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  public employees;
  constructor() { }

  ngOnInit() {
    //this.employeeAssign.getEmployees().subscribe(data => { this.employees = data});
  }

}

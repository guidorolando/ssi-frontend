import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-assignment-report',
  templateUrl: './assignment-report.component.html',
  styleUrls: ['./assignment-report.component.css']
})
export class AssignmentReportComponent implements OnInit {

  public employeesReport;

  constructor() { }

  ngOnInit() {
  }

}

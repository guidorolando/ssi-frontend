import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee.service';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [EmployeeService]
})
export class ReportComponent implements OnInit {
public  users: Array<Employee>;
constructor(private clientService: EmployeeService) { }

  ngOnInit() {
  this.loadUsers();
  }
private loadUsers(): void {
  this.clientService.getEmployees().subscribe(res => {
    this.users = res;
    console.log(res);
  });
}

}

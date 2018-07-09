import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {IncidentAgentService} from '../../services/incident-agent.service';
import {IncidentAgent} from '../../models/incident-agent.model';
import {IncidentType} from '../../models/incident-type.model';
import {IncidentTypeService} from '../../services/incident-type.service';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../models/employee.model';
import {CreateIncident} from '../../models/create-incident.model';
import {IncidentService} from '../../services/incident.service';

@Component({
  selector: 'app-incident-add',
  templateUrl: './incident-add.component.html',
  styleUrls: ['./incident-add.component.css']
})
export class IncidentAddComponent implements OnInit {
  incidentAgents$: Observable<IncidentAgent[]>;
  incidentTypes$: Observable<IncidentAgent[]>;
  employees$: Observable<IncidentAgent[]>;
  incidentAgent: IncidentAgent;
  incidentType: IncidentType;
  employee: Employee;
  employeeId;
  createIncidentForm: FormGroup;
  public closeEvent = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private incidentAgentService: IncidentAgentService,
    private incidentTypeService: IncidentTypeService,
    private employeeService: EmployeeService,
    private incidentService: IncidentService
  ) {
    this.employeeId = 0;
    this.employee = new Employee();
  }

  ngOnInit() {
    this.createIncidentForm = this.fb.group(<any> new CreateIncident());
    this.getEmployees();
    this.getIncidentAgents();
    this.getIncidentTypes();
  }

  closeIncident() {
    this.closeEvent.next(true);
    console.log(this.createIncidentForm.value);
  }

  getEmployees() {
    this.employees$ = this.employeeService.getEmployees();
  }

  selectEmployee(employee: Employee) {
    this.employee = employee;
  }

  getIncidentAgents() {
    this.incidentAgents$ = this.incidentAgentService.getIncidentAgents();
  }

  selectIncidentAgent(incidentAgent: IncidentAgent) {
    this.incidentAgent = incidentAgent;
  }

  getIncidentTypes() {
    this.incidentTypes$ = this.incidentTypeService.getIncidentTypes();
  }

  selectIncidentType(incidentType: IncidentType) {
    this.incidentType = incidentType;
  }

  fillInformation(employeeId) {
    this.employeeId = employeeId + 1;
    this.getEmployeeById(this.employeeId);
  }

  getEmployeeById(employeeId) {
    this.employeeService.getEmployeeById(employeeId).subscribe(data => {
      this.employee = data.data;
    });
  }

  onSubmit() {

    this.incidentService.saveIncident(this.createIncidentForm.value).subscribe(data => {
      console.log(data);
    });
    this.closeIncident();
  }
}

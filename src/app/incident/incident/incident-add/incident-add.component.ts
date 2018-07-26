import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {IncidentAgent} from "../../../models/incident-agent.model";
import {IncidentType} from "../../../models/incident-type.model";
import {Employee} from "../../../models/employee.model";
import {IncidentTypeService} from "../../../services/incident-type.service";
import {IncidentAgentService} from "../../../services/incident-agent.service";
import {IncidentService} from "../../../services/incident.service";
import {EmployeeService} from "../../../services/employee.service";
import {CreateIncident} from "../../../models/create-incident.model";
import {IncidentTypeAddComponent} from "../../incident-type/incident-type-add/incident-type-add.component";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

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
  modalRef: BsModalRef;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private incidentAgentService: IncidentAgentService,
    private incidentTypeService: IncidentTypeService,
    private employeeService: EmployeeService,
    private incidentService: IncidentService,
    private modalService: BsModalService
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
  createIncidentType() {
    this.modalRef = this.modalService.show(IncidentTypeAddComponent, {class: 'modal-lg'});
    this.modalRef.content.isModal = true;
    this.modalRef.content.closeIncidentTypeEvent.subscribe(
      res => this.closeIncidentType(res)
    );
  }

  closeIncidentType(close: boolean): void {
    if (close && this.modalRef) {
      this.modalRef.hide();
      this.modalRef.content.closeIncidentTypeEvent.unsubscribe();
    }
  }
}

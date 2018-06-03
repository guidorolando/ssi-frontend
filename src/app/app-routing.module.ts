import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AssignmentComponent} from './assignment/assignment.component';
import {MaterialElementComponent} from './material-element/material-element.component';
import {AssignmentReportComponent} from './assignment-report/assignment-report.component';
import {HomeComponent} from './home/home.component';
import {EmployeeListComponent} from './ui/form/employee/employee-list/employee-list.component';
import {ReportComponent} from './report/report.component';
import {AboutComponent} from './about/about.component';
import {AccidentComponent} from './accident/accident.component';
import {OEstructureComponent} from './oestructure/oestructure.component';
import {IncidentTypeListComponent} from './ui/form/Incident-type/incident-type-list/incident-type-list.component';
import {EmployeeAddComponent} from './ui/form/employee/employee-add/employee-add.component';
import {EmployeeEditComponent} from './ui/form/employee/employee-edit/employee-edit.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'assignment',
    component: AssignmentComponent
  },
  {
    path: 'materialEquipment',
    component: MaterialElementComponent
  },
  {
    path: 'assignment-report',
    component: AssignmentReportComponent
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent
  },
  {
    path: 'employee-add',
    component: EmployeeAddComponent
  },
  {
    path: 'employee-edit',
    component: EmployeeEditComponent
  },
  {
    path: 'incident-type-list',
    component: IncidentTypeListComponent
  },
  {
    path: 'assignment',
    component: AssignmentComponent
  },
  {
    path: 'material',
    component: MaterialElementComponent
  },
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: 'accident',
    component: AccidentComponent
  },
  {
    path: 'oestructure',
    component: OEstructureComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false, useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

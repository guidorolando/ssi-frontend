import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AssignmentComponent} from './assignment/assignment.component';
import {MaterialElementComponent} from './material-element/material-element.component';
import {AssignmentReportComponent} from './assignment-report/assignment-report.component';
import {HomeComponent} from './home/home.component';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {ReportComponent} from './report/report.component';
import {AboutComponent} from './about/about.component';
import {IncidentListComponent} from './accident/incident-list/incident-list.component';
import {IncidentAddComponent} from './accident/incident-add/incident-add.component';
import {OEstructureComponent} from './oestructure/oestructure.component';
import {IncidentTypeListComponent} from './ui/form/Incident-type/incident-type-list/incident-type-list.component';
import {MaterialCreateComponent} from './material-element/material-create/material-create.component';
import {MaterialUpdateComponent} from './material-element/material-update/material-update.component';
import {MaterialDeleteComponent} from './material-element/material-delete/material-delete.component';
import {AutocompleteComponent} from './ui/form/incident/autocomplete/autocomplete.component';
import {EmployeeDetailComponent} from './employee/employee-detail/employee-detail.component';
import {EmployeeEditComponent} from './employee/employee-edit/employee-edit.component';
import {EmployeeAddComponent} from './employee/employee-add/employee-add.component';
import {MaterialTypeAddComponent} from './material-type/material-type-add/material-type-add.component';
import {MaterialTypeListComponent} from './material-type/material-type-list/material-type-list.component';
import {EmployeeTypeListComponent} from './employee/employee-type-list/employee-type-list.component';
import {AreaCreateComponent} from './area-create/area-create.component';
import {CapacityCreateComponent} from './capacity-create/capacity-create.component';
import {AreaListComponent} from './area-list/area-list.component';
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
    path: 'employee-detail',
    component: EmployeeDetailComponent
  },
  {
    path: 'employee-type-list',
    component: EmployeeTypeListComponent
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
    path: 'material-type-add',
    component: MaterialTypeAddComponent
  },
  {
    path: 'material-type-list',
    component: MaterialTypeListComponent
  },
  {
    path: 'material',
    component: MaterialElementComponent
  },
  {
    path: 'report',
    component: ReportComponent
  },
  // {
  //   path: 'accident',
  //   component: AccidentComponent
  // },
  {
    path: 'oestructure',
    component: OEstructureComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'create-mat',
    component: MaterialCreateComponent
  },
  {
    path: 'edit-mat',
    component: MaterialUpdateComponent
  },
  {
    path: 'area-create',
    component: AreaCreateComponent
  },
  {
    path: 'area-list',
    component: AreaListComponent
  },
  {
    path: 'capacity-create',
    component: CapacityCreateComponent
  },

  {
    path: 'delete-mat',
    component: MaterialDeleteComponent
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

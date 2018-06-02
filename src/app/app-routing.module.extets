import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AssignmentComponent} from './assignment/assignment.component';
import {MaterialElementComponent} from './material-element/material-element.component';
import {AssignmentReportComponent} from './assignment-report/assignment-report.component';
import { HomeComponent } from './home/home.component';
import {EmployeeListComponent} from './ui/form/employee/employee-list/employee-list.component';

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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false, useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

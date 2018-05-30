import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AssignmentComponent} from './assignment/assignment.component';
import {MaterialElementComponent} from './material-element/material-element.component';
import {AssignmentReportComponent} from './assignment-report/assignment-report.component';

const routes: Routes = [
  {
    path: 'assignment',
    component: AssignmentComponent
  },
  {
    path: 'material',
    component: MaterialElementComponent
  },
  {
    path: 'assignment-report',
    component: AssignmentReportComponent
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

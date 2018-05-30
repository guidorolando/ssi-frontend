import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { HomeComponent } from './home/home.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { MaterialElementComponent } from './material-element/material-element.component';
import { AssignmentReportComponent } from './assignment-report/assignment-report.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/security/security.module#SecurityModule'
  },
  {
    path: '',
    loadChildren: 'app/security/security.module#SecurityModule'
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
    path: 'assignment-report',
    component: AssignmentReportComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ enableTracing: false , useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

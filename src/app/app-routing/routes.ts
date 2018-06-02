import { Routes } from '@angular/router';
import {AssignmentComponent} from '../assignment/assignment.component';
import {MaterialElementComponent} from '../material-element/material-element.component';
import {AssignmentReportComponent} from '../assignment-report/assignment-report.component';
import {ReportComponent} from '../report/report.component';
// import { CatalogComponent } from '../catalog/catalog.component';
import { HomeComponent } from '../home/home.component';
import {AccidentComponent} from '../accident/accident.component';
// import {StepperComponent} from '../stepper/stepper.component';
import {OEstructureComponent} from '../oestructure/oestructure.component';
import {AboutComponent} from '../about/about.component';

export const routes: Routes = [
  { path: 'assignment',
    component: AssignmentComponent },
  { path: 'material',
    component: MaterialElementComponent },
  { path: 'assignment-report',
    component: AssignmentReportComponent },
  { path: 'report',
    component: ReportComponent },
  { path: 'home',
    component: HomeComponent },
  { path: 'accident',
    component: AccidentComponent },
  { path: 'oestructure',
    component: OEstructureComponent},
  { path: 'about',
    component: AboutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }

 // { path: 'catalog',     component: CatalogComponent },
 // { path: '', redirectTo: '/home', pathMatch: 'full' }
];

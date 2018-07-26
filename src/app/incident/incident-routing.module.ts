import {RouterModule, Routes} from "@angular/router";
import {IncidentListComponent} from "./incident/incident-list/incident-list.component";
import {NgModule} from "@angular/core";
import {IncidentAddComponent} from "./incident/incident-add/incident-add.component";
import {IncidentTypeAddComponent} from "./incident-type/incident-type-add/incident-type-add.component";

const routes: Routes = [
  {
    path: 'incident-add',
    component: IncidentAddComponent
  },
  {
    path: 'incident-type-add',
    component: IncidentTypeAddComponent
  },
  {
    path: 'incident-list',
    component: IncidentListComponent
  },
  {
    path: '',
    component: IncidentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentRoutingModule {}

import {ModelModule} from '../models/model.module';
import {NgModule} from '@angular/core';
import {EmployeeService} from './employee.service';

@NgModule({
  imports: [ModelModule],
  exports: [],
  declarations: []
})
export class ServiceModule {
}

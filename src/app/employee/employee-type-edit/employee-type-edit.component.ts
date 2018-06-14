import {Component, EventEmitter, OnInit} from '@angular/core';
import {Employee, gender} from '../../models/employee.model';
import {EmployeeService} from '../../services/employee.service';
import {EmployeeTypeService} from '../../services/employee-type.service';
import {Router} from '@angular/router';
import {SharedValuesService} from '../../services/shared-values.service';
import {EmployeeType} from '../../models/employee-type.model';

@Component({
  selector: 'app-employee-type-edit',
  templateUrl: './employee-type-edit.component.html',
  styleUrls: ['./employee-type-edit.component.css']
})
export class EmployeeTypeEditComponent implements OnInit {

  employeeType: EmployeeType;
  private isValid: Boolean = true;
  private  message: String = '';

  public closeEvent = new EventEmitter<boolean>();

  constructor(
              private  router: Router,
              private employeeTypeService: EmployeeTypeService,
              private _sharedValuesService: SharedValuesService) {

    this.employeeType = this._sharedValuesService.employeeTypeValue$;
  }


  ngOnInit() {
  }

  public updateEmployeeType(): void {
    this.isValid = this.employeeTypeService.validate(this.employeeType);
    if (this.isValid) {
      console.log('update employee', this.employeeType);
      this.employeeTypeService.updateTypeEmployee(this.employeeType).subscribe(res => {
        this.router.navigate(['employee-type-list']);
        this.closeModal();
      });
    } else {
      this.message = 'los camos son obligatorios';
    }
  }

  closeModal() {
    this.closeEvent.next(true);
  }
}

import {Component, Input, OnChanges} from '@angular/core';
import {Employee} from '../../../../models/employee.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EmployeeService} from '../../../../services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnChanges {
  @Input() employee: Employee;
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService) {
  }

  createForm() {
    this.employeeForm = this.fb.group({
      firstName: '',
      lastName: '',
      address: ''
    });
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  rebuildForm() {
    this.employeeForm.reset({
      firstName: this.employee.firstName,
      lastName: this.employee.lastName,
      address: this.employee.address
    });
  }

  onSubmit() {
    this.employee = this.prepareSaveEmployee();
    this.employeeService.updateEmployee(this.employee).subscribe();
    this.rebuildForm();
  }

  prepareSaveEmployee(): Employee {
    const formModel = this.employeeForm.value;
    const saveEmployee: Employee = {
      id: this.employee.id,
      firstName: formModel.firstName as string,
      lastName: formModel.lastName as string,
      address: formModel.address as string
    };
    return saveEmployee;
  }
  revert() {
    this.rebuildForm();
  }
}

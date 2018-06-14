import {Component, EventEmitter, OnInit} from '@angular/core';
import {EmployeeTypeService} from '../../services/employee-type.service';
import {Router} from '@angular/router';
import {EmployeeType} from '../../models/employee-type.model';

@Component({
  selector: 'app-employee-type-add',
  templateUrl: './employee-type-add.component.html',
  styleUrls: ['./employee-type-add.component.css']
})
export class EmployeeTypeAddComponent implements OnInit {

  employeeType: EmployeeType;
  private isValid: Boolean = true;
  private  message: String = '';

  public closeEvent = new EventEmitter<boolean>();

  constructor(private  router: Router,
              private employeeTypeService: EmployeeTypeService) {
    this.employeeType = new EmployeeType();
  }

  ngOnInit() {
  }

  public saveEmployeeType(): void {
    this.isValid = this.employeeTypeService.validate(this.employeeType);
    if (this.isValid) {
      this.employeeTypeService.createTypeEmployee(this.employeeType).subscribe(res => {
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

import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Employee} from '../models/employee.model';
import {EmployeeType} from '../models/employee-type.model';

@Injectable()
export class SharedValuesService {
  private employeeSubject: BehaviorSubject<Employee>;
  private employeeTypeSubject: BehaviorSubject<EmployeeType>;

  constructor() {
    this.employeeSubject = new BehaviorSubject<Employee>(new Employee());
    this.employeeTypeSubject = new BehaviorSubject<EmployeeType>(new EmployeeType());
  }

  get employee$(): Observable<Employee> {
    return this.employeeSubject.asObservable();
  }

  get employeeType$(): Observable<EmployeeType> {
    return this.employeeTypeSubject.asObservable();
  }

  public setEmployee$(args: Employee): void {
    this.employeeSubject.next(args);
  }

  public setEmployeeType$(args: EmployeeType): void {
    this.employeeTypeSubject.next(args);
  }

  get employeeValue$(): Employee {
    return this.employeeSubject.getValue();
  }

  get employeeTypeValue$(): EmployeeType {
    return this.employeeTypeSubject.getValue();
  }
}

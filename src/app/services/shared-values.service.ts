import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Employee} from '../models/employee.model';

@Injectable()
export class SharedValuesService {
  private employeeSubject: BehaviorSubject<Employee>;

  constructor() {
    this.employeeSubject = new BehaviorSubject<Employee>(new Employee());
  }

  get employee$(): Observable<Employee> {
    return this.employeeSubject.asObservable();
  }

  public setEmployee$(args: Employee): void {
    this.employeeSubject.next(args);
  }

  get employeeValue$(): Employee {
    return this.employeeSubject.getValue();
  }
}

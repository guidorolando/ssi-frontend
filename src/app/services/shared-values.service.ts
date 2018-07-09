import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Employee} from '../models/employee.model';
import {EmployeeType} from '../models/employee-type.model';
import {MaterialType} from '../models/material-type.model';
import get = Reflect.get;

@Injectable()
export class SharedValuesService {
  private employeeSubject: BehaviorSubject<Employee>;
  private employeeTypeSubject: BehaviorSubject<EmployeeType>;
  private materialTypeSubject: BehaviorSubject<MaterialType>;
  constructor() {
    this.employeeSubject = new BehaviorSubject<Employee>(new Employee());
    this.employeeTypeSubject = new BehaviorSubject<EmployeeType>(new EmployeeType());
    this.materialTypeSubject = new BehaviorSubject<MaterialType>(new MaterialType());
  }

  get employee$(): Observable<Employee> {
    return this.employeeSubject.asObservable();
  }

  get employeeType$(): Observable<EmployeeType> {
    return this.employeeTypeSubject.asObservable();
  }

  get materialTypes$(): Observable < MaterialType > {
    return this.materialTypeSubject.asObservable();
  }

  public setEmployee$(args: Employee): void {
    this.employeeSubject.next(args);
  }

  public setEmployeeType$(args: EmployeeType): void {
    this.employeeTypeSubject.next(args);
  }

  public setMaterialTypes$(args: MaterialType): void {
    this.materialTypeSubject.next(args);
  }

  get employeeValue$(): Employee {
    return this.employeeSubject.getValue();
  }

  get employeeTypeValue$(): EmployeeType {
    return this.employeeTypeSubject.getValue();
  }

  get materialTypeValue$(): MaterialType {
    return this.materialTypeSubject.getValue();
  }
}

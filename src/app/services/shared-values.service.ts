import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Employee} from '../models/employee.model';
import {MaterialType} from '../models/material-type.model';

@Injectable()
export class SharedValuesService {
  private employeeSubject: BehaviorSubject<Employee>;
  private materialTypeSubject: BehaviorSubject<MaterialType>;
  constructor() {
    this.employeeSubject = new BehaviorSubject<Employee>(new Employee());
    this.materialTypeSubject = new BehaviorSubject<MaterialType>(new MaterialType());
  }

  get employee$(): Observable<Employee> {
    return this.employeeSubject.asObservable();
  }

  get materialTypes$(): Observable<MaterialType> {
    return this.materialTypeSubject.asObservable();
  }

  public setEmployee$(args: Employee): void {
    this.employeeSubject.next(args);
  }

  public setMaterialTypes$(args: MaterialType): void {
    this.materialTypeSubject.next(args);
  }

  get employeeValue$(): Employee {
    return this.employeeSubject.getValue();
  }

  get materialTypeValue$(): MaterialType {
    return this.materialTypeSubject.getValue();
  }
}

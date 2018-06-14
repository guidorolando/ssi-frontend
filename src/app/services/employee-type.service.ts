import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {AbstractServiceService} from './abstract-service.service';
import {EmployeeType} from '../models/employee-type.model';
import {Employee} from '../models/employee.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class EmployeeTypeService extends AbstractServiceService {

  constructor(private http: HttpClient) {
    super(http);
  }

  getEmployeesType(): Observable<any> {
    return this.http.get<any>(baseURL + 'employeeType', {responseType: 'json'})
      .map((data) => {
        return data.data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }
  public validate(employeeType: EmployeeType): boolean {
    return true;
  }

  createTypeEmployee (employeeType: EmployeeType): Observable<any> {
    console.log('new employeeee:', employeeType);
    return this.http.post(baseURL + 'employeeType',  employeeType, httpOptions)
      .map(response => response)
      .map((data) => {
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }
}

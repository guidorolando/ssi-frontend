import {Injectable} from '@angular/core';
import {Employee} from '../models/employee.model';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<any> {
    return this.http.get<any>(baseURL + 'employee')
      .map((res) => {
        console.log(res);
        return res;
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    // const oldEmployee =
    return null;
  }

  createEmployee(): Observable<Employee> {
    return null;
  }
}

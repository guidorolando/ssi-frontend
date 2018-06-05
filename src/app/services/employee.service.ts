import {Injectable} from '@angular/core';
import {Employee} from '../models/employee.model';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {AbstractServiceService} from './abstract-service.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class EmployeeService extends AbstractServiceService {

  constructor(private http: HttpClient) {
    super(http);
  }

  getEmployees(): Observable<any> {
    return this.http.get<any>(baseURL + 'employee', {responseType: 'json'})
      .map((data) => {
        return data.data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put(baseURL + 'employee/' + `${employee.id}`, employee, httpOptions).pipe(
      tap(_ => this.log(`updated employee id=${employee.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return null;
  }
}

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AbstractServiceService} from './abstract-service.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class EmployeeTypeService extends AbstractServiceService {

  constructor(private http: HttpClient) {
    super(http);
  }

  getEmployeesType(): Observable<any> {
    return this.http.get<any>(this.baseURL + 'employeeType', {responseType: 'json'})
      .map((data) => {
        return data.data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }
}

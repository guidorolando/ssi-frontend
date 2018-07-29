import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Employee} from './models/employee.model';
import {AbstractServiceService} from './services/abstract-service.service';


@Injectable()
export class ClientService extends AbstractServiceService{

  constructor(private http: HttpClient) {
    super(http);
  }

  public getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseURL + 'employee');
  }
}

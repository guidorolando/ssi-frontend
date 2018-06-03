import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Employee} from './models/employee.model';


@Injectable()
export class ClientService {

  constructor( private http: HttpClient){}

  public getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:8080/employee');

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../../shared/baseurl';

@Injectable()
export class AssignmentService {

  constructor(private http: HttpClient) { }

saveAssignment(data: any): Observable<any>{
    const params = JSON.stringify(data);
    return this.http.post(baseURL+'/assignment', {Headers});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Assignment } from '../../models/assignment.model';
import {AbstractServiceService} from "../../services/abstract-service.service";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AssignmentService extends AbstractServiceService{

  constructor(private http: HttpClient) {
    super(http);
  }

  saveAssignment (assignment: Assignment): Observable<any> {
    return this.http.post(this.baseURL + 'assignment',assignment, httpOptions)
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

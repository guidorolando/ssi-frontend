import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import {AbstractServiceService} from "../../services/abstract-service.service";

@Injectable()
export class AssignmentReportService extends AbstractServiceService{

  constructor(private http: HttpClient) {
    super(http);
  }

  getAssignment(): Observable<any> {
    return this.http.get(this.baseURL +'assignment').map((res) => {
        return res;
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }
}

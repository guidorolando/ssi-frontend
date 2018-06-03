import {AbstractServiceService} from './abstract-service.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';

@Injectable()
export class ReportService extends AbstractServiceService {
  constructor(private http: HttpClient) {
    super(http);
  }

  getIncidentByType(): Observable<any> {
    return this.http.get<any>(baseURL + 'reportIncidentByType', {responseType: 'json'})
      .map(res => {
        return res;
      })
      .catch(error => {
        console.log('error' + error);
        return error;
      });
  }
}

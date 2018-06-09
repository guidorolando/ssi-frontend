import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AbstractServiceService} from './abstract-service.service';
import {Incident} from '../models/incident.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class IncidentService extends AbstractServiceService {

  constructor(private http: HttpClient) {
    super(http);
  }

  getIncidents(): Observable<any> {
    return this.http.get<any>(baseURL + 'Incident', {responseType: 'json'})
      .map((data) => {
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }
  updateIncident(incident: any): Observable<any> {
    return null;
  }
}

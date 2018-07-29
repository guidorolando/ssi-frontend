import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
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
    return this.http.get<any>(this.baseURL + 'Incident', {responseType: 'json'})
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
  saveIncident(incident) {
    return this.http.post(this.baseURL + 'Incident/createIncident',  incident, httpOptions)
      .map(response => response)
      .map((data) => {
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }
  deleteIncident(id) {
    return this.http.delete(this.baseURL + 'Incident/' + id, httpOptions)
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

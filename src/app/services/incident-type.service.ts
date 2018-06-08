import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IncidentType} from '../models/incident-type.model';
import {baseURL} from '../shared/baseurl';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {AbstractServiceService} from './abstract-service.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Conteny-Type': 'application/json'
  })
};
@Injectable()
export class IncidentTypeService extends AbstractServiceService{
  constructor(private http: HttpClient) {
    super(http);
  }

  getIncidentTypes(): Observable<any> {
    return this.http.get<any>(baseURL + 'IncidentType', {responseType: 'json'})
      .map((data) => {
        return data.data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }

<<<<<<< HEAD
  updateIncidentType(incidentType: IncidentType): Observable<IncidentType> {
=======
  updateIncidentType(incidentType: IncidentType): Observable<any> {
>>>>>>> b9672255624e69bbefe04fb490984f902b2f3a4d
    return this.http.put(baseURL + 'IncidentType/' + `${incidentType.id}`, incidentType, httpOptions).pipe(
      tap(_ => this.log(`updated employee id=${incidentType.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

<<<<<<< HEAD

=======
  createIncidentType(incidentType: IncidentType): Observable<any> {
    return this.http.post(baseURL + 'IncidentType', incidentType, httpOptions)
      .map(response => response)
      .map((data) => {
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }
>>>>>>> b9672255624e69bbefe04fb490984f902b2f3a4d
}

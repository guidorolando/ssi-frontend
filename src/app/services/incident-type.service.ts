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

  getIncidentTypes(): Observable<IncidentType[]> {
    return this.http.get<IncidentType[]>(baseURL + 'IncidentType', {responseType: 'json'})
      .map((data) => {
        return data.data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }

}

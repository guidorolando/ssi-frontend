import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {AbstractServiceService} from './abstract-service.service';
import {Material} from '../models/material.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class MaterialService extends AbstractServiceService {

  constructor(private http: HttpClient) {
    super(http);
  }

  getMaterials(): Observable<any> {
    return this.http.get<any>(baseURL + 'material', {responseType: 'json'})
      .map((data) => {
        return data.data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }

  getMaterialById(material: Material): Observable<any> {
    return this.http.get<any>(baseURL + 'material/' + `${material.id}`, {responseType: 'json'})
      .map((data) => {
        return data.data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }
  updateMaterial(material: Material): Observable<Material> {
    return this.http.put(baseURL + 'employee/' + `${material.id}`, material, httpOptions).pipe(
      tap(_ => this.log(`updated material id=${material.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  createe(material: Material): Observable<Material> {
    return null;
  }
}

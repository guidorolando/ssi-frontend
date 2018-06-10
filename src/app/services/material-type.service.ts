import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {AbstractServiceService} from './abstract-service.service';
import {MaterialType} from '../models/material-type.model';
import {Employee} from '../models/employee.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class MaterialTypeService extends AbstractServiceService {

  constructor(private http: HttpClient) {
    super(http);
  }

  getTypeMaterials(): Observable<any> {
    return this.http.get<any>(baseURL + 'materialType/materialType', {responseType: 'json'})
      .map((data) => {
        console.log('datatata:' + data);
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }

  getMaterialTypeById(materialType: MaterialType): Observable<any> {
    return this.http.get<any>(baseURL + 'materialType/' + `${materialType.id}`, {responseType: 'json'})
      .map((data) => {
        return data.data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }

  updateMaterialType(materialType: MaterialType): Observable<MaterialType> {
    return this.http.put(baseURL + 'materialType/' + `${materialType.id}`, materialType, httpOptions).pipe(
      tap(_ => this.log(`updated materialType id=${materialType.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  createMaterialType(materialType: MaterialType): Observable<MaterialType> {
    return null;
  }
}

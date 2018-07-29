import { Injectable } from '@angular/core';
import {AbstractServiceService} from './abstract-service.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Area} from '../models/area.model';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AreaService extends AbstractServiceService{
  constructor(private http: HttpClient) {
    super(http);
  }

  public getAreas(): Observable<Area[]> {
     return this.http.get<Area[]>('http://localhost:8080/area') ;
   }

  getAllAreas(): Observable<any> {
    console.log('esto son areas');
    return this.http.get<any>(this.baseURL + 'area', {responseType: 'json'})
      .map((data) => {
        console.log('area List ', data.data);
        return data.data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }

  public deleteArea (areas: Area): Observable<any> {
    console.log('hola ' + areas.id);
    return this.http.delete('http://localhost:8080/area/' + `${areas.id}` )
      .map(response => response)
      .map((data) => {
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
   // sessionStorage.clear();
  }
}





import { Injectable } from '@angular/core';
import {AbstractServiceService} from './abstract-service.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Area} from '../models/area.model';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AreaService {
  constructor(private http: HttpClient) {}

  public getAreas(): Observable<Area[]> {
     return this.http.get<Area[]>('http://localhost:8080/area') ;
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





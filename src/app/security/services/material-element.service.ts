import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Material } from '../../models/material.model';
import {AbstractServiceService} from "../../services/abstract-service.service";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class MaterialElementService extends AbstractServiceService{

  constructor(private http: HttpClient) {
    super(http);
  }

  getMaterial(): Observable<any> {
    return this.http.get(this.baseURL + 'Material').map((res) => {console.log('ruta: ', this.baseURL + 'material');
    console.log('material: ', res);
        return res;
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }
  getMaterialById(id: number): Observable<any> {
    return this.http.get(this.baseURL + 'Material/' + id).map((res) => {
      console.log('data: ', res);
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }

  getMaterialType(): Observable<any> {
    return this.http.get(this.baseURL + 'materialType/materialType').map((res) => {
      console.log('data: ', res);
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }

  createMaterial (material: Material): Observable<any> {
    return this.http.post(this.baseURL + 'Material/',material, httpOptions)
      .map(response => response)
      .map((data) => {
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }

  updateMaterial (material: Material): Observable<any> {
    console.log(this.baseURL);
    return this.http.put(this.baseURL + 'Material/'+material.id,material, httpOptions)
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

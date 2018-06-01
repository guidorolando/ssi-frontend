import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../../shared/baseurl';


@Injectable()
export class MaterialElementService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get(baseURL + 'material')
      .map((res) => {
        return res;
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }
}

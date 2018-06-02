import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {observable} from 'rxjs/symbol/observable';
import {Observable} from 'rxjs';


@Injectable()
export class ClientService {
  public url: string;

  constructor(public http: HttpClient) {
    this.url = 'http://localhost:8080/customers';
  }

  getClientes(): Observable<any> {
    return this.http.get(this.url);
  }

}

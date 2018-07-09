import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AbstractServiceService} from './abstract-service.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class IncidentAgentService extends AbstractServiceService {

  constructor(private http: HttpClient) {
    super(http);
  }

  getIncidentAgents(): Observable<any> {
    return this.http.get<any>(baseURL + 'accidentAgent', {responseType: 'json'})
      .map((data) => {
        console.log('ppppppppppppppppppppppppppppppppppppppppppppppppp');
        console.log(data);
        return data;
      })
      .catch(error => {
        console.log('error:' + error);
        return error;
      });
  }
}

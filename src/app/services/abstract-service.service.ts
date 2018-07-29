import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
export abstract class AbstractServiceService {
  protected baseURL: string;
  protected constructor(protected _http: HttpClient) {
    this.baseURL = environment.baseUrl;
  }
  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  protected log(message: string) {
    console.log(message);
  }
}

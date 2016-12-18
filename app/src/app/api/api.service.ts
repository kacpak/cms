import {Injectable} from '@angular/core';
import {AuthHttpService} from './authorized-http.service';
import {Observable} from 'rxjs';
import {Response} from '@angular/http';

@Injectable()
export class ApiService {

  protected apiEndpoint = process.env.data.apiEndpoint;

  constructor(protected http: AuthHttpService) {}

  getLumenVersion(): Observable<string> {
    return this.http.get(this.apiEndpoint + '/version')
      .map((res: Response) => res.text())
      .catch(this.logError);
  }

  protected logError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ApiService {
  constructor (private http: Http) {}

  private api = 'http://api.cms.dev';

  getLumenVersion(): Observable<string> {
    return this.http.get(this.api)
      .map((res: Response) => res.text())
      .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../../../typings/responses/responses';
import {ApiService} from "../api.service";
import {AuthHttpService} from "../authorized-http.service";
import {Router} from "@angular/router";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";

@Injectable()
export class UserService extends ApiService {

  constructor(http: AuthHttpService, private router: Router) {
    super(http);
  }

  getUser(): Observable<User> {
    return this.http.get(this.apiEndpoint + '/api/user')
      .map((response: Response): User => response.json())
      .catch(this.redirectUnauthorized);
  }

  redirectUnauthorized(error: Response): ErrorObservable {
    if (error.status === 401) {
      this.router.navigate(['/auth/login']);
    }
    return Observable.throw(error);
  }

}

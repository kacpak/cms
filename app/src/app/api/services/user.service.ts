import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../../../typings/responses/responses';
import {ApiService} from "../api.service";
import {AuthHttpService} from "../authorized-http.service";

@Injectable()
export class UserService extends ApiService {

  constructor(http: AuthHttpService) {
    super(http);
  }

  getUser(): Observable<User> {
    return this.http.get(this.apiEndpoint + '/api/user')
      .map((response: Response): User => response.json());
  }

}

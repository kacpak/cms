import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../../../typings/responses/responses';
import {ApiService} from '../api.service';
import {AuthHttpService} from '../authorized-http.service';
import {Router} from '@angular/router';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {UserStore} from './user.store';

@Injectable()
export class UserService extends ApiService {

  constructor(http: AuthHttpService, private router: Router, private userStore: UserStore) {
    super(http);
  }

  getUser(): Observable<User> {
    return this.http.get(this.apiEndpoint + '/api/user')
      .map((response: Response): User => {
        let user: User = response.json();
        this.userStore.setUser(user);
        return user;
      })
      .catch(this.redirectUnauthorized)
      .share();
  }

  redirectUnauthorized(error: Response): ErrorObservable<any> {
    // this.userStore.purge();
    if (error.status === 401) {
      this.router.navigate(['/auth/login']);
    }
    return Observable.throw(error);
  }

}

import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../../../models/responses';
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

  isAuthenticated(): boolean {
    return this.http.hasAuthorizationToken() && !!Object.keys(this.userStore.getUser()).length;
  }

  getSelf(): Observable<User> {
    return this.http.get(this.apiEndpoint + '/api/user')
      .map((response: Response): User => {
        let user: User = response.json();
        this.userStore.setUser(user);
        return user;
      })
      .catch(error => this.redirectUnauthorized(error));
  }

  updateSelf(user: User): Observable<User> {
    return this.http.post(this.apiEndpoint + '/api/user', user)
      .map((response: Response): User => {
        let user: User = response.json();
        this.userStore.setUser(user);
        return user;
      })
      .catch(error => this.redirectUnauthorized(error));
  }

  getUser(id: number): Observable<User> {
    return this.http.get(this.apiEndpoint + '/api/users/' + id)
      .map((response: Response): User => response.json())
      .catch(error => this.redirectUnauthorized(error));
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.apiEndpoint + '/api/users')
      .map((response: Response): User => response.json())
      .share();
  }

  updateUser(user: User): Observable<User> {
    return this.http.patch(this.apiEndpoint + '/api/users/' + user.id, user)
      .map((response: Response): User => response.json())
      .catch(error => this.redirectUnauthorized(error));
  }

  createUser(user: User) {
    return this.http.post(this.apiEndpoint + '/api/users', user)
      .map((response: Response): User => response.json())
      .catch(error => this.redirectUnauthorized(error));
  }

  deleteUser(id: number): Observable<boolean> {
    return this.http.delete(this.apiEndpoint + '/api/users/' + id)
      .map((response: Response) => response.status === 200);
  }

  redirectUnauthorized(error: Response): ErrorObservable<any> {
    if (error.status === 401) {
      this.userStore.purge();
      // this.http.setAuthorizationToken();
      this.router.navigate(['/auth/login']);
    }
    return Observable.throw(error);
  }

}

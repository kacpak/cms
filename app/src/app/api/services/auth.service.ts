import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {TokenResponse} from '../../../typings/responses/responses';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {AuthHttpService} from '../authorized-http.service';
import {ApiService} from '../api.service';
import {UserStore} from './user.store';
import {UserService} from './user.service';

@Injectable()
export class AuthService extends ApiService {

  constructor(http: AuthHttpService, private userService: UserService, private userStore: UserStore) {
    super(http);
    this.http.setAuthorizationToken(Cookie.get('authorization'));
  }

  hasAuthorizationToken(): boolean {
    return this.http.hasAuthorizationToken();
  }

  signIn(username: string, password: string): Observable<string> {
    let data = {
      grant_type: 'password',
      client_id: process.env.data.clientId,
      client_secret: process.env.data.clientSecret,
      username: username,
      password: password,
      scope: '*'
    };

    return this.http.post(this.apiEndpoint + '/oauth/token', data)
      .map((response: Response): string => {
        let token: TokenResponse = response.json();
        let authorizationHeader = `${token.token_type} ${token.access_token}`;
        this.http.setAuthorizationToken(authorizationHeader);
        this.userService.getUser().subscribe();
        return authorizationHeader;
      })
      .catch((error) => {
        console.error(error.message);
        return Observable.throw(error.message);
      });
  }

  signOut(): void {
    this.http.setAuthorizationToken();
    this.userStore.purge();
  }

}

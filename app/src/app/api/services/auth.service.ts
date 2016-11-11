import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {TokenResponse} from '../../../typings/responses/responses';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {AuthHttpService} from '../authorized-http.service';
import {ApiService} from "../api.service";
import {UserStore} from "./user.store";

@Injectable()
export class AuthService extends ApiService {

  private isAuthorized: boolean;

  constructor(http: AuthHttpService, private userStore: UserStore) {
    super(http);
    this.setAuthorizationToken(Cookie.get('authorization'));
  }

  isAuthenticated() {
    return this.isAuthorized;
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
        this.setAuthorizationToken(authorizationHeader);
        return authorizationHeader;
      })
      .catch((error) => {
        this.isAuthorized = false;
        console.error(error.message);
        return Observable.throw(error.message);
      });
  }

  signOut(): void {
    this.setAuthorizationToken(null);
    this.userStore.purge();
  }

  setAuthorizationToken(token: string) {
    this.http.setAuthorizationToken(token);
    this.isAuthorized = !!token;
  }

}

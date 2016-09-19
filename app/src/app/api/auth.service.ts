import {Injectable} from '@angular/core';
import {Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User, TokenResponse} from '../../typings/responses/responses';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {AuthHttpService} from './authorized-http.service';
import {ApiService} from "./api.service";

@Injectable()
export class AuthService extends ApiService {

  private isAuthorized: boolean;

  constructor(http: AuthHttpService) {
    super(http);
    this.http.setAuthorizationToken(Cookie.get('authorization'));
  }

  getLumenVersion(): Observable<string> {
    return this.http.get(this.apiEndpoint + '/version')
      .map((res: Response) => res.text())
      .catch(this.handleError);
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
        this.http.setAuthorizationToken(authorizationHeader);
        return authorizationHeader;
      })
      .catch((error) => {
        this.isAuthorized = false;
        console.error(error.message);
        return Observable.throw(error.message);
      });
  }

  signOut(): void {
    this.http.setAuthorizationToken(null);
  }

  getUser(): Observable<User> {
    return this.http.get(this.apiEndpoint + '/api/user')
      .map((response: Response): User => response.json());
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

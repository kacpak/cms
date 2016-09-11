import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User, TokenResponse} from '../../typings/responses/responses';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class ApiService {
  constructor (private http: Http, private localStorageService: LocalStorageService) {
    this.headers = new Headers();
    this.setAuthorization(this.localStorageService.get<string>('authorization'));
  }

  private api = 'http://api.cms.dev';
  private isAuthorized: boolean;
  private headers: Headers;

  getLumenVersion(): Observable<string> {
    return this.http.get(this.api + '/version')
      .map((res: Response) => res.text())
      .catch(this.handleError);
  }

  isAuthenticated() {
    return this.isAuthorized;
  }

  signIn(username: string, password: string): Observable<string> {
    let data = {
      grant_type: 'password',
      client_id: '3',
      client_secret: 'sDLlcQjSwamCj7crr6H02eq4MzarOmP3RCcj3n1A',
      username: username,
      password: password,
      scope: '*'
    };

    return this.http.post(this.api + '/oauth/token', data)
      .map((response: Response): string => {
        let token: TokenResponse = response.json();
        let authorizationHeader = `${token.token_type} ${token.access_token}`;
        this.setAuthorization(authorizationHeader);
        return authorizationHeader;
      })
      .catch((error) => {
        this.isAuthorized = false;
        console.error(error.message);
        return Observable.throw(error.message);
      });
  }

  signOut(): void {
    this.setAuthorization(null);
  }

  getUser(): Observable<User> {
    return this.http.get(this.api + '/api/user', {headers: this.headers})
      .map((response: Response): User => response.json());
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private setAuthorization(auth: string) {
    if (auth) {
      this.headers.set('Authorization', auth);
    } else {
      this.headers.delete('Authorization');
    }
    this.isAuthorized = !!auth;
    this.localStorageService.set('authorization', auth);
  }
}

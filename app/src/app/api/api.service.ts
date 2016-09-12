import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User, TokenResponse, News} from '../../typings/responses/responses';
import {LocalStorageService} from 'angular-2-local-storage';

// TODO decouple it for every components needs, and wrap Http service to provide authentication
@Injectable()
export class ApiService {

  private api = process.env.data.apiEndpoint;
  private isAuthorized: boolean;
  private headers: Headers;

  constructor (private http: Http, private localStorageService: LocalStorageService) {
    this.headers = new Headers();
    this.setAuthorization(this.localStorageService.get<string>('authorization'));
  }

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
      client_id: process.env.data.clientId,
      client_secret: process.env.data.clientSecret,
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

  getNews(id?: number): Observable<News[]|News> {
    if (id) {
      return this.http.get(this.api + '/api/news/' + id, {headers: this.headers})
        .map((response: Response) => response.json() as News);
    }

    return this.http.get(this.api + '/api/news', {headers: this.headers})
      .map((response: Response) => response.json() as News[]);
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

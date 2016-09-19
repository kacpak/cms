import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptionsArgs} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Cookie} from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AuthHttpService {

  private headers: Headers;
  private requestOptions: RequestOptionsArgs;

  constructor (private http: Http) {
    this.headers = new Headers();
    this.requestOptions = {};
    this.setAuthorizationToken(Cookie.get('authorization'));
  }

  setAuthorizationToken(token: string) {
    if (token) {
      this.headers.set('Authorization', token);
      Cookie.set('authorization', token);
    } else {
      this.headers.delete('Authorization');
      Cookie.delete('authorization');
    }
    this.requestOptions.headers = this.headers;
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.get(url, this.getRequestOptions(options)).map(this.checkForError);
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.post(url, body, this.getRequestOptions(options)).map(this.checkForError);
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.put(url, body, this.getRequestOptions(options)).map(this.checkForError);
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.delete(url, this.getRequestOptions(options)).map(this.checkForError);
  }

  patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.patch(url, body, this.getRequestOptions(options)).map(this.checkForError);
  }

  head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.head(url, this.getRequestOptions(options)).map(this.checkForError);
  }

  private checkForError(response: Response): Response {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error['response'] = response;
      console.error(error);
      throw error;
    }
  }

  private getRequestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
    let requestOptions = {};
    return Object.assign(requestOptions, this.requestOptions, options);
  }
}

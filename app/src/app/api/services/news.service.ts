import {Injectable} from '@angular/core';
import {ApiService, AuthHttpService} from '../../api';
import {News} from '../../../typings/responses/responses';
import {Observable} from "rxjs";
import {Response} from "@angular/http";

@Injectable()
export class NewsService extends ApiService {

  constructor(http: AuthHttpService) {
    super(http);
  }

  getNews(id?: number): Observable<News[]|News> {
    if (id) {
      return this.http.get(this.apiEndpoint + '/api/news/' + id)
        .map((response: Response) => response.json() as News);
    }

    return this.http.get(this.apiEndpoint + '/api/news')
      .map((response: Response) => response.json() as News[]);
  }

}

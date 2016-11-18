import {Injectable} from '@angular/core';
import {ApiService, AuthHttpService} from '../../api';
import {News} from '../../../typings/responses/responses';
import {Observable} from "rxjs";
import {Response} from "@angular/http";
import {NewsStore} from "./news.store";

@Injectable()
export class NewsService extends ApiService {

  constructor(http: AuthHttpService, private newsStore: NewsStore) {
    super(http);
  }

  getNews(id?: number): Observable<News[]|News> {
    if (id) {
      return this.http.get(this.apiEndpoint + '/api/news/' + id)
        .map((response: Response) => {
          let news = response.json();
          this.newsStore.updateNews(news);
          return news;
        });
    }

    return this.http.get(this.apiEndpoint + '/api/news')
      .map((response: Response) => {
        let news: News[] = response.json();
        this.newsStore.setNews(news);
        return news;
      });
  }

  postNews(data: News): Observable<News> {
    return this.http.post(this.apiEndpoint + '/api/news', data)
      .map((response: Response) => {
        let news = response.json();
        this.newsStore.updateNews(news);
        return news;
      })
  }

  deleteNews(id: number): Observable<boolean> {
      return this.http.delete(this.apiEndpoint + '/api/news/' + id)
          .map((response: Response) => {
              if (response.status == 200) {
                  this.newsStore.deleteNews(id);
                  return true;
              }
              return false;
          });
  }

}

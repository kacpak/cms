import {Injectable} from '@angular/core';
import {ApiService, AuthHttpService} from '../../api';
import {News} from '../../../models/responses';
import {Observable} from 'rxjs';
import {Response} from '@angular/http';
import {NewsStore} from './news.store';

@Injectable()
export class NewsService extends ApiService {

  constructor(http: AuthHttpService, private newsStore: NewsStore) {
    super(http);
  }

  getNews(id?: number, iconAdjusted: boolean = true): Observable<News[]|News> {
    if (id) {
      return this.http.get(this.apiEndpoint + '/api/news/' + id)
        .map((response: Response) => {
          let news = response.json();
          this.newsStore.updateNews(news);
          return news;
        })
        .map((news: News) => {
          if (iconAdjusted) {
            return this.adjustIcon(news);
          }
          return news;
        })
        .share();
    }

    return this.http.get(this.apiEndpoint + '/api/news')
      .map((response: Response) => {
        let news: News[] = response.json();
        this.newsStore.setNews(news);
        return news;
      })
      .map((news: News[]) => {
        news.forEach(single => this.adjustIcon(single));
        return news;
      })
      .share();
  }

  getAllNews(): Observable<News[]> {
    return this.http.get(this.apiEndpoint + '/api/news-all')
      .map((response: Response) => response.json());
  }

  postNews(data: News): Observable<News> {
    return this.http.post(this.apiEndpoint + '/api/news', data)
      .map((response: Response) => {
        let news = response.json();
        this.newsStore.updateNews(news);
        return news;
      });
  }

  updateNews(data: News): Observable<News> {
    return this.http.patch(this.apiEndpoint + '/api/news/' + data.id, data)
      .map((response: Response) => {
        let news = response.json();
        this.newsStore.updateNews(news);
        return news;
      });
  }

  deleteNews(id: number): Observable<boolean> {
      return this.http.delete(this.apiEndpoint + '/api/news/' + id)
          .map((response: Response) => {
              if (response.status === 200) {
                  this.newsStore.deleteNews(id);
                  return true;
              }
              return false;
          });
  }

  adjustIcon(news: News) {
    news.icon = NewsService.getAdjustedIcon(news.icon);
    return news;
  }

  static getAdjustedIcon(icon: string) {
    const isAbsoluteUrl = new RegExp('^(?:[a-z]+:)?//', 'i');
    if (icon && !isAbsoluteUrl.test(icon) && !icon.startsWith('data:image')) {
      return process.env.data.apiEndpoint + icon;
    }
    return icon;
  }

}

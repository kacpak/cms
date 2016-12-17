import {Injectable} from '@angular/core';
import {ApiService, AuthHttpService} from '../../api';
import {Article} from '../../../typings/responses/responses';
import {Observable} from "rxjs";
import {Response} from "@angular/http";

@Injectable()
export class ArticlesService extends ApiService {

  constructor(http: AuthHttpService) {
    super(http);
  }

  getArticles(): Observable<Article[]> {
    return this.http.get(this.apiEndpoint + '/api/articles')
      .map((response: Response) => {
        let articles: Article[] = response.json();
        return articles;
      });
  }

  getArticle(id: number): Observable<Article> {
    return this.http.get(this.apiEndpoint + '/api/articles/' + id)
      .map((response: Response) => {
        let article: Article = response.json();
        return article;
      });
  }

  postArticle(article: Article): Observable<Article> {
    return this.http.post(this.apiEndpoint + '/api/articles', article)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateArticle(article: Article): Observable<Article> {
    return this.http.patch(this.apiEndpoint + '/api/articles/' + article.id, article)
      .map((response: Response) => {
        return response.json();
      });
  }

  getAllArticles(): Observable<Article[]> {
    return this.http.get(this.apiEndpoint + '/api/articles/all')
      .map((response: Response) => response.json());
  }

  deleteArticle(id: number): Observable<boolean> {
    return this.http.delete(this.apiEndpoint + '/api/articles/' + id)
      .map((response: Response) => response.status == 200);
  }

}

import { Component } from '@angular/core';
import {News} from '../../../../models/responses';
import {NewsService, NewsStore} from '../../../api';

@Component({
  selector: 'news-list',
  templateUrl: 'news-list.component.html'
})
export class NewsListComponent {

  newsList: News[];

  constructor(private api: NewsService, private newsStore: NewsStore) {
    this.newsStore.changes.subscribe((news: News[]) => this.newsList = news);
  }

  ngOnInit() {
    this.api.getNews().subscribe((news: News[]) => this.newsList = news);
  }
}

import { Component } from '@angular/core'
import {News} from "../../../../typings/responses/responses";
import {NewsService} from "../news.service";

// TODO implement store for news-list
@Component({
  selector: 'news-list',
  templateUrl: 'news-list.component.html'
})
export class NewsListComponent {

  newsList: News[];

  constructor(private api: NewsService) {
  }

  ngOnInit() {
    this.api.getNews().subscribe(
      news => this.newsList = news as News[]
    )
  }
}

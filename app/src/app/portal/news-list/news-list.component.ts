import { Component } from '@angular/core'
import {ApiService} from "../../api/api.service";
import {News} from "../../../typings/responses/responses";

// TODO implement store for news-list
@Component({
  selector: 'news-list',
  templateUrl: 'news-list.component.html'
})
export class NewsListComponent {

  newsList: News[];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getNews().subscribe(
      news => this.newsList = news as News[]
    )
  }
}

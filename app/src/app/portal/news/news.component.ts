import { Component } from '@angular/core'
import {ApiService} from "../../api/api.service";
import {News} from "../../../typings/responses/responses";

@Component({
  selector: 'news',
  templateUrl: 'news.component.html'
})
export class NewsComponent {

  newsList: News[];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getNews().subscribe(
      news => this.newsList = news
    )
  }
}

import { Component } from '@angular/core'
import {News} from "../../../typings/responses/responses";
import {NewsService} from "../../api/services/news.service";
import {Router} from "@angular/router";

@Component({
  selector: 'add-news',
  templateUrl: 'add-news.component.html'
})
export class AddNewsComponent {

  news: News;
  active: boolean = true;
  error: boolean = false;

  constructor(private newsService: NewsService, private router: Router) {
    this.news = {};
  }

  onSubmit() {
    this.active = false;
    this.error = false;
    this.newsService.postNews(this.news).subscribe(
      news => this.router.navigateByUrl('/admin'),
      error => {
        this.active = true;
        this.error = true;
      }
    );
  }

}

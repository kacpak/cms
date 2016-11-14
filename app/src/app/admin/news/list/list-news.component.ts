import {Component, OnInit, OnDestroy} from '@angular/core'
import {News} from "../../../../typings/responses/responses";
import {NewsService} from "../../../api/services/news.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'list-news',
  templateUrl: 'list-news.component.html'
})
export class ListNewsComponent implements OnInit, OnDestroy {

  newsArray: News[] = [];

  private newsSubscription: Subscription;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsSubscription = this.newsService.getNews().subscribe(news => this.newsArray = news as News[]);
  }

  ngOnDestroy(): void {
    this.newsSubscription.unsubscribe();
  }
}

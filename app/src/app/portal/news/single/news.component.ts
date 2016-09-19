import {Component} from '@angular/core'
import {News} from "../../../../typings/responses/responses";
import {ActivatedRoute, Router} from "@angular/router";
import {NewsService} from '../news.service';

// TODO implement store for news-list
@Component({
  selector: 'news',
  templateUrl: 'news.component.html'
})
export class NewsComponent {

  news: News;
  isAvailable: boolean;

  constructor(private api: NewsService, private route: ActivatedRoute, private router: Router) {
    this.isAvailable = false;
    this.news = {
      title: '',
      content: '',
      author: {name: ''}
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.api.getNews(id).subscribe(
        news => {
          this.news = news;
          this.isAvailable = true;
        },
        error => this.router.navigate(['/news'])
      )
    });
  }
}

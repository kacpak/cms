import {Component} from '@angular/core'
import {News} from "../../../../typings/responses/responses";
import {ActivatedRoute, Router} from "@angular/router";
import {NewsService} from '../../../api';
import 'rxjs/Rx';

@Component({
  selector: 'news',
  templateUrl: 'news.component.html'
})
export class NewsComponent {

  news: News;
  isAvailable: boolean;

  // TODO use news store whend operator .find() or .first() starts working properly
  constructor(private api: NewsService, private route: ActivatedRoute, private router: Router) {
    this.isAvailable = false;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.api.getNews(id).subscribe(
        news => {
          this.news = news;
          this.isAvailable = true;
        },
        error => this.router.navigate(['/'])
      )
    });
  }
}

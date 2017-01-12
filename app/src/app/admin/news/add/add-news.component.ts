import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {News} from '../../../../models/responses';
import {NewsService} from '../../../api/services/news.service';
import * as moment from 'moment';

@Component({
  selector: 'add-news',
  templateUrl: 'add-news.component.html'
})
export class AddNewsComponent {

  news: News;
  active: boolean = true;
  error: boolean = false;

  constructor(private newsService: NewsService, private router: Router) {
    this.news = {
      published_at: moment().format('YYYY-MM-DD HH:mm:ss')
    };
  }

  onSubmit() {
    this.active = false;
    this.error = false;
    this.newsService.postNews(this.news).subscribe(
      news => this.router.navigateByUrl('/admin/news'),
      error => {
        this.active = true;
        this.error = true;
      }
    );
  }

}

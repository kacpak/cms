import {Component, OnInit} from '@angular/core';
import {News} from '../../../../typings/responses/responses';
import {NewsService} from '../../../api/services/news.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'edit-news',
  templateUrl: 'edit-news.component.html'
})
export class EditNewsComponent implements OnInit {

  news: News;
  active: boolean = false;
  error: boolean = false;

  constructor(private newsService: NewsService, private route: ActivatedRoute, private router: Router) {
    this.news = {};
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.newsService.getNews(id).subscribe(
        news => {
          this.news = news;
          this.active = true;
        },
        error => this.router.navigateByUrl('/admin/news')
      );
    });
  }

  onSubmit() {
    this.active = false;
    this.error = false;
    this.newsService.updateNews(this.news).subscribe(
      news => this.router.navigateByUrl('/admin/news'),
      error => {
        this.active = true;
        this.error = true;
      }
    );
  }

}

import {Component} from '@angular/core'
import {News, User} from "../../../../typings/responses/responses";
import {ActivatedRoute, Router} from "@angular/router";
import {NewsService} from '../../../api';
import {UserStore} from "../../../api/services/user.store";
import 'rxjs/Rx';
import {Permissions} from "../../../api/guards/permissions";

@Component({
  selector: 'news',
  templateUrl: 'news.component.html'
})
export class NewsComponent {

  news: News;
  user: User;
  isAvailable: boolean;

  // TODO use news store whend operator .find() or .first() starts working properly
  constructor(private userStore: UserStore, private newsService: NewsService,
              private route: ActivatedRoute, private router: Router) {
    this.isAvailable = false;
    this.userStore.changes.subscribe((user: User) => this.user = user);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.newsService.getNews(id).subscribe(
        news => {
          this.news = news;
          this.isAvailable = true;
        },
        error => this.router.navigate(['/'])
      )
    });
  }

  canEdit() {
    return Permissions.canAccessNewsPanel(this.user.role);
  }
}

import {Component} from '@angular/core';
import {Article, User} from '../../../models/responses';
import {UserStore} from '../../api/services/user.store';
import {ArticlesService} from '../../api/services/articles.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Permissions} from '../../api/guards/permissions';

@Component({
  selector: 'show-article',
  templateUrl: 'article.component.html'
})
export class ArticleComponent {

  article: Article;
  user: User;
  isAvailable: boolean;

  constructor(private userStore: UserStore, private articlesService: ArticlesService,
              private route: ActivatedRoute, private router: Router) {
    this.isAvailable = false;
    this.userStore.changes.subscribe((user: User) => this.user = user);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.articlesService.getArticle(id).subscribe(
        article => {
          this.article = article;
          this.isAvailable = true;
        },
        error => this.router.navigate(['/'])
      );
    });
  }

  canEdit() {
    return Permissions.canAccessArticlesPanel(this.user.role) && Permissions.canEdit(this.user, this.article.author.id);
  }
}

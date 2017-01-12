import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Article} from '../../../../models/responses';
import {ArticlesService} from '../../../api/services';

@Component({
  selector: 'article-add',
  templateUrl: 'article-add.component.html'
})
export class ArticleAddComponent {

  article: Article;
  active: boolean = true;
  error: boolean = false;

  constructor(protected articleService: ArticlesService, protected router: Router) {
    this.article = {} as Article;
  }

  onTitleChange(title: string): void {
    const slugify = (text: string) => (text || '').toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');

    let slugFromOldTitle = slugify(this.article.title);
    let slug = slugify(title);
    if (!this.article.slug || this.article.slug === slugFromOldTitle) {
      this.article.slug = slug;
    }
    this.article.title = title;
  }

  onSubmit() {
    this.active = false;
    this.error = false;
    this.articleService.postArticle(this.article).subscribe(
      news => this.router.navigateByUrl('/admin/articles'),
      error => {
        this.active = true;
        this.error = true;
      }
    );
  }

}

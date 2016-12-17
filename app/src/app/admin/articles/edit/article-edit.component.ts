import {Component, OnInit} from '@angular/core'
import {Article} from "../../../../typings/responses/responses";
import {ArticlesService} from "../../../api/services/articles.service";
import {Router, ActivatedRoute} from "@angular/router";
import {ArticleAddComponent} from "../add/article-add.component";

@Component({
  selector: 'article-edit',
  templateUrl: 'article-edit.component.html'
})
export class ArticleEditComponent extends ArticleAddComponent implements OnInit {

  article: Article = {} as Article;
  active: boolean = false;
  error: boolean = false;

  constructor(articleService: ArticlesService, private route: ActivatedRoute, router: Router) {
    super(articleService, router);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.articleService.getArticle(id).subscribe(
        article => {
          this.article = article;
          this.active = true;
        },
        error => this.router.navigateByUrl('/admin/articles')
      )
    });
  }

  onSubmit(): void {
    this.active = false;
    this.error = false;
    this.articleService.updateArticle(this.article).subscribe(
      () => this.router.navigateByUrl('/admin/articles'),
      error =>  {
        this.active = true;
        this.error = true;
      }
    );
  }
}

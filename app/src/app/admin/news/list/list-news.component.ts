import {Component, OnInit, OnDestroy} from '@angular/core';
import {News, User} from '../../../../models/responses';
import {NewsService} from '../../../api/services/news.service';
import {Subscription} from 'rxjs';
import {Modal} from '../../../shared/modal-util/modal-util';
import {UserStore} from "../../../api/services/user.store";
import {Permissions} from "../../../api/guards/permissions";

@Component({
  selector: 'list-news',
  templateUrl: 'list-news.component.html'
})
export class ListNewsComponent implements OnInit, OnDestroy {

  newsArray: News[] = [];
  user: User;

  private newsSubscription: Subscription;

  constructor(private newsService: NewsService, private userStore: UserStore) {}

  ngOnInit(): void {
    this.newsSubscription = this.newsService.getAllNews().subscribe(news => this.newsArray = news as News[]);
    this.user = this.userStore.getUser();
  }

  ngOnDestroy(): void {
    this.newsSubscription.unsubscribe();
  }

  onDelete(id: number, fieldset?: HTMLElement) {
    let news = this.newsArray.find((foundNews: News) => foundNews.id === id);

    Modal.getDangerDialog()
      .content(`Czy na pewno chcesz usunąć news "${news.title}"?`)
      .header('Usuwanie')
      .confirm('Usuń')
      .onResolve(() => {
        if (fieldset) {
          jQuery(fieldset).attr('disabled', 'disabled');
        }
        this.newsService.deleteNews(id).subscribe(
          (isDeleted: boolean) => {
            this.newsService.getNews().subscribe(newsArray => this.newsArray = newsArray as News[]);
          },
          (error: any) => {
            jQuery(fieldset).removeAttr('disabled');
          }
        );
      })
      .show();
  }

  canEdit(news: News): boolean {
    return Permissions.canEdit(this.user, news.author.id);
  }
}

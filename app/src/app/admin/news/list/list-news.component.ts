import {Component, OnInit, OnDestroy} from '@angular/core'
import {News} from "../../../../typings/responses/responses";
import {NewsService} from "../../../api/services/news.service";
import {Subscription} from "rxjs";
import {Modal} from "../../../shared/modal-util/modal-util";

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

  onDelete(id: number, fieldset?: HTMLElement) {
    let news = this.newsArray.find((news: News) => news.id == id);

    Modal.getDangerDialog()
        .content(`Czy na pewno chcesz usunąć news "${news.title}"?`)
        .header('Usuwanie')
        .onResolve(() => {
          if (fieldset) {
            jQuery(fieldset).attr('disabled', 'disabled');
          }
          this.newsService.deleteNews(id).subscribe(
              (isDeleted: boolean) => {
                this.newsService.getNews().subscribe(news => this.newsArray = news as News[]);
              },
              (error: any) => {
                jQuery(fieldset).removeAttr('disabled');
              }
          );
        })
        .show();
  }
}

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {News} from "../../../typings/responses/responses";

const defaultState: News[] = [];
const _newsStore = new BehaviorSubject<News[]>(defaultState);

@Injectable()
export class NewsStore {
  private _store = _newsStore;
  changes = this._store.asObservable().distinctUntilChanged();

  setNews(news: News[]) {
    this._store.next(news);
  }

  updateNews(news: News) {
    const currentArray: News[] = this.getNews();

    let index = currentArray.findIndex(savedNews => savedNews.id == news.id);
    if (index > -1) {
      currentArray[index] = news;
    } else {
      currentArray.push(news);
    }

    this.setNews(currentArray);
  }

  getNews(): News[] {
    return this._store.value;
  }

  purge() {
    this._store.next(defaultState);
  }

}

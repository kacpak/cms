import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {MenuItem} from '../../../typings/responses/responses';

const menuDefaultState: MenuItem[] = [];
const _menuStore = new BehaviorSubject<MenuItem[]>(menuDefaultState);

@Injectable()
export class MenuStore {
  private _store = _menuStore;
  changes = this._store.asObservable().distinctUntilChanged();

  setMenu(user: MenuItem[]) {
    this._store.next(user);
  }

  getMenu(): MenuItem[] {
    return this._store.value;
  }

  purge() {
    this._store.next(menuDefaultState);
  }

}

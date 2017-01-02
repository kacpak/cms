import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {User} from '../../../typings/responses/responses';

const defaultState: User = {};
const _userStore = new BehaviorSubject<User>(defaultState);

@Injectable()
export class UserStore {
  private _store = _userStore;
  changes = this._store.asObservable().distinctUntilChanged();

  setUser(user: User) {
    this._store.next(user);
  }

  getUser(): User {
    return this._store.value;
  }

  purge() {
    this._store.next(defaultState);
  }

}

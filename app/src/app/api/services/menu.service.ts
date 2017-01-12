import {Injectable} from '@angular/core';
import {ApiService, AuthHttpService} from '../../api';
import {MenuItem} from '../../../models/responses';
import {Observable} from 'rxjs';
import {Response} from '@angular/http';
import {MenuStore} from './menu.store';

@Injectable()
export class MenuService extends ApiService {

  constructor(http: AuthHttpService, private menuStore: MenuStore) {
    super(http);
  }

  getMenu(): Observable<MenuItem[]> {
    return this.http.get(this.apiEndpoint + '/api/menu')
      .map((response: Response) => {
        let menu = response.json();
        this.menuStore.setMenu(menu);
        return menu;
      });
  }

  getMenuData(): Observable<MenuItem[]> {
    return this.http.get(this.apiEndpoint + '/api/menu/all')
      .map((response: Response) => response.json());
  }

  addMenuItem(item: MenuItem) {
    return this.http.post(this.apiEndpoint + '/api/menu', item)
      .map((response: Response) => response.json());
  }

  deleteMenuItem(id: number) {
    return this.http.delete(this.apiEndpoint + '/api/menu/' + id);
  }

  updateMenuItem(item: MenuItem) {
    return this.http.patch(this.apiEndpoint + '/api/menu/' + item.id, item);
  }

  saveMenuOrder(menu: MenuItem[]) {
    return this.http.patch(this.apiEndpoint + '/api/menu', menu)
      .map((response: Response) => response.json())
  }
}

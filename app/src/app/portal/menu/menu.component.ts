import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../../../typings/responses/responses';
import {MenuService} from '../../api/services/menu.service';
import {MenuStore} from '../../api/services/menu.store';

@Component({
  selector: 'side-menu',
  templateUrl: 'menu.component.html'
})
export class MenuComponent implements OnInit {

  payload: MenuItem[];

  constructor(private menuService: MenuService, private menuStore: MenuStore) {}

  ngOnInit(): void {
    this.menuService.getMenu().subscribe();
    this.menuStore.changes.subscribe((menu: MenuItem[]) => this.payload = menu);
  }
}

import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {ApiModule} from '../api';
import {routing} from './admin.routing';
import {AdminPanelComponent} from "./panel/admin-panel.component";
import {AddNewsComponent} from "./news/add/add-news.component";
import {AdminComponent} from "./admin.component";
import {ListNewsComponent} from "./news/list/list-news.component";
import {EditNewsComponent} from "./news/edit/edit-news.component";
import {ListMenuComponent} from "./menu/list/menu-list.component";
import {ArticlesListComponent} from "./articles/list/articles-list.component";
import {AddMenuItemComponent} from "./menu/add-tem/menu-add-item.component";

@NgModule({
  imports: [
    SharedModule,
    ApiModule.forRoot(),
    routing
  ],
  declarations: [
    AdminComponent,
    AdminPanelComponent,
    AddNewsComponent,
    EditNewsComponent,
    ListNewsComponent,
    ListMenuComponent,
    AddMenuItemComponent,
    ArticlesListComponent
  ]
})
export class AdminModule { }

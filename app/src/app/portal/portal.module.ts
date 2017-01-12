import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {PortalComponent, routing} from './';
import {ApiModule} from '../api';
import {NewsComponent, NewsListComponent} from './news';
import {MenuComponent} from './menu/menu.component';
import {MenuItemComponent} from './menu/item/menu-item.component';
import {ArticleComponent} from './article/article.component';
import {CommentsComponent} from './comments/comments.component';
import {SimpleMenuItemComponent} from "./menu/item/simple/simple-menu-item.component";

@NgModule({
  imports: [
    SharedModule,
    ApiModule.forRoot(),
    routing
  ],
  declarations: [
    PortalComponent,
    NewsListComponent,
    NewsComponent,
    MenuComponent,
    MenuItemComponent,
    SimpleMenuItemComponent,
    ArticleComponent,
    CommentsComponent
  ]
})
export class PortalModule { }

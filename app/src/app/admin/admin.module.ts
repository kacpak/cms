import {NgModule} from '@angular/core';
import {SortablejsModule} from 'angular-sortablejs';

import {SharedModule} from '../shared/shared.module';
import {ApiModule} from '../api';
import {routing} from './admin.routing';
import {AdminPanelComponent} from './panel/admin-panel.component';
import {AdminComponent} from './admin.component';
import {ListNewsComponent, AddNewsComponent, EditNewsComponent} from './news';
import {ListMenuComponent, AddMenuItemComponent} from './menu';
import {ArticleListComponent, ArticleAddComponent, ArticleEditComponent} from './articles';
import {UsersListComponent, AddUserComponent, EditUserComponent} from './users';

@NgModule({
  imports: [
    SharedModule,
    SortablejsModule,
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
    ArticleAddComponent,
    ArticleEditComponent,
    ArticleListComponent,
    UsersListComponent,
    AddUserComponent,
    EditUserComponent
  ]
})
export class AdminModule { }

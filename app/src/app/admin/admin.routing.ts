import {RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {AdminPanelComponent} from "./panel/admin-panel.component";
import {AdminGuard} from "../api/guards/admin-guard.service";
import {AddNewsComponent} from "./news/add/add-news.component";
import {AdminComponent} from "./admin.component";
import {ListNewsComponent} from "./news/list/list-news.component";
import {EditNewsComponent} from "./news/edit/edit-news.component";
import {ListMenuComponent} from "./menu/list/menu-list.component";
import {ArticlesListComponent} from "./articles/list/articles-list.component";
import {AddMenuItemComponent} from "./menu/add-tem/menu-add-item.component";

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'overview', component: AdminPanelComponent },
      { path: 'articles', component: ArticlesListComponent },
      { path: 'news', component: ListNewsComponent },
      { path: 'news/add', component: AddNewsComponent },
      { path: 'news/:id', component: EditNewsComponent },
      { path: 'menu', component: ListMenuComponent, children: [
        { path: '' },
        { path: 'add', component: AddMenuItemComponent }
      ] },
      { path: '**', redirectTo: 'overview' }
    ]
  }
]);

import {RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {AdminPanelComponent} from "./panel/admin-panel.component";
import {AdminGuard} from "../api/guards/admin-guard.service";
import {AdminComponent} from "./admin.component";
import {ListNewsComponent, AddNewsComponent, EditNewsComponent} from "./news";
import {ListMenuComponent, AddMenuItemComponent} from "./menu";
import {ArticleListComponent, ArticleAddComponent, ArticleEditComponent} from "./articles";

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'overview', component: AdminPanelComponent },
      { path: 'articles', component: ArticleListComponent },
      { path: 'articles/add', component: ArticleAddComponent },
      { path: 'articles/:id', component: ArticleEditComponent },
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

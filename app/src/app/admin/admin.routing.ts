import {RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {AdminPanelComponent} from "./panel/admin-panel.component";
import {AdminGuard} from "../api/guards/admin-guard.service";
import {AddNewsComponent} from "./news/add/add-news.component";
import {AdminComponent} from "./admin.component";
import {ListNewsComponent} from "./news/list/list-news.component";

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'overview', component: AdminPanelComponent },
      { path: 'news', component: ListNewsComponent },
      { path: 'news/add', component: AddNewsComponent },
      { path: '**', redirectTo: 'overview' }
    ]
  }
]);

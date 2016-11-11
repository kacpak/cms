import {RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {AdminPanelComponent} from "./panel/admin-panel.component";
import {AdminGuard} from "../api/guards/admin-guard.service";
import {AddNewsComponent} from "./add-news/add-news.component";
import {AdminComponent} from "./admin.component";

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'overview', component: AdminPanelComponent },
      { path: 'add-news', component: AddNewsComponent },
      { path: '**', redirectTo: 'overview' }
    ]
  }
]);

import {NgModule, ModuleWithProviders} from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';

import {AuthHttpService} from './authorized-http.service';
import {AuthService, UserService, NewsService} from './';
import {RouterModule} from "@angular/router";
import {AdminGuard} from "./guards/admin-guard.service";
import {AuthGuard} from "./guards/auth-guard.service";
import {UserStore} from "./services/user.store";
import {NewsStore} from "./services/news.store";
import {MenuService} from "./services/menu.service";
import {MenuStore} from "./services/menu.store";

@NgModule({
  imports: [HttpModule, JsonpModule, RouterModule],
  exports: [JsonpModule]
})
export class ApiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        AuthService,
        AuthHttpService,
        NewsService,
        UserService,
        AuthGuard,
        AdminGuard,
        UserStore,
        NewsStore,
        MenuService,
        MenuStore
      ]
    };
  }
}

import {NgModule, ModuleWithProviders} from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';
import {RouterModule} from "@angular/router";

import {AuthHttpService} from './authorized-http.service';
import {
  AuthService, UserService, UserStore, NewsService, NewsStore, MenuService, MenuStore, ArticlesService
} from './services';
import {AdminGuard, AuthGuard} from './guards';

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
        AuthGuard,
        AdminGuard,
        NewsService,
        NewsStore,
        UserService,
        UserStore,
        MenuService,
        MenuStore,
        ArticlesService
      ]
    };
  }
}

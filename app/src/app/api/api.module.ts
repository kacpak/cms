import {NgModule, ModuleWithProviders} from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';

import {AuthHttpService} from './authorized-http.service';
import {AuthService, UserService, NewsService} from './';
import {RouterModule} from "@angular/router";

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
      ]
    };
  }
}

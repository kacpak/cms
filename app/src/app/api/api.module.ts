import {NgModule, ModuleWithProviders} from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';

import {AuthHttpService} from './authorized-http.service';
import {AuthService, UserService, NewsService} from './';

@NgModule({
  imports: [HttpModule, JsonpModule],
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
        UserService
      ]
    };
  }
}

import {NgModule, ModuleWithProviders} from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';

import {AuthService} from './auth.service';
import {AuthHttpService} from './authorized-http.service';

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
        AuthHttpService
      ]
    };
  }
}

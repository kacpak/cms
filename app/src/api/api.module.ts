import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { ApiService } from './api.service';

@NgModule({
  imports: [ HttpModule, JsonpModule ],
  exports: [HttpModule, JsonpModule ]
})
export class ApiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [ ApiService ]
    };
  }
}

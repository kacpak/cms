import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { LocalStorageService, LOCAL_STORAGE_SERVICE_CONFIG } from 'angular-2-local-storage';

import { ApiService } from './api.service';

let localStorageServiceConfig = {
  prefix: 'kasprzakCMS',
  storageType: 'sessionStorage'
};

@NgModule({
  imports: [ HttpModule, JsonpModule ],
  exports: [HttpModule, JsonpModule ]
})
export class ApiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        ApiService,
        LocalStorageService,
        {
          provide: LOCAL_STORAGE_SERVICE_CONFIG, useValue: localStorageServiceConfig
        }
      ]
    };
  }
}

import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {PortalComponent, routing} from './';
import {ApiModule} from '../api';
import {NewsComponent, NewsListComponent, NewsService} from './news';
import {SettingsComponent} from './settings';

@NgModule({
  imports: [
    SharedModule,
    ApiModule.forRoot(),
    routing
  ],
  declarations: [
    PortalComponent,
    NewsListComponent,
    NewsComponent,
    SettingsComponent
  ],
  providers: [
    NewsService
  ]
})
export class PortalModule { }

import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {PortalComponent, routing} from './';
import {ApiModule} from '../api';
import {NewsComponent, NewsListComponent, NewsService} from './news';

@NgModule({
  imports: [
    SharedModule,
    ApiModule.forRoot(),
    routing
  ],
  declarations: [
    PortalComponent,
    NewsListComponent,
    NewsComponent
  ],
  providers: [
    NewsService
  ]
})
export class PortalModule { }

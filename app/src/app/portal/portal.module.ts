import {NgModule} from '@angular/core';

import {SharedModule} from "../shared/shared.module";
import {PortalComponent, routing} from './';
import {NewsListComponent} from './news-list';
import {ApiModule} from '../api';
import {NewsComponent} from "./news/news.component";

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
  ]
})
export class PortalModule { }

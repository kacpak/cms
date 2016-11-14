import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {ApiModule} from '../api';
import {routing} from './admin.routing';
import {AdminPanelComponent} from "./panel/admin-panel.component";
import {AddNewsComponent} from "./news/add/add-news.component";
import {AdminComponent} from "./admin.component";
import {ListNewsComponent} from "./news/list/list-news.component";

@NgModule({
  imports: [
    SharedModule,
    ApiModule.forRoot(),
    routing
  ],
  declarations: [
    AdminComponent,
    AdminPanelComponent,
    AddNewsComponent,
    ListNewsComponent
  ]
})
export class AdminModule { }

import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {ApiModule} from '../api';
import {routing} from './admin.routing';
import {AdminPanelComponent} from "./panel/admin-panel.component";
import {AddNewsComponent} from "./add-news/add-news.component";
import {AdminComponent} from "./admin.component";

@NgModule({
  imports: [
    SharedModule,
    ApiModule.forRoot(),
    routing
  ],
  declarations: [
    AdminComponent,
    AdminPanelComponent,
    AddNewsComponent
  ]
})
export class AdminModule { }

import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {PortalComponent, routing} from './';
import {ApiModule} from '../api';
import {NewsComponent, NewsListComponent} from './news';
import {SettingsComponent} from './settings';
import {MenuComponent} from "./menu/menu.component";
import {MenuItemComponent} from "./menu/item/menu-item.component";

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
    SettingsComponent,
    MenuComponent,
    MenuItemComponent
  ]
})
export class PortalModule { }

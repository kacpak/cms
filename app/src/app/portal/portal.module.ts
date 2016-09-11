import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PortalComponent, routing } from './';
import { NewsComponent } from './news';
import { ApiModule } from '../api';
import {PortalHeaderComponent} from "./ui/portal-header/portal-header.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ApiModule.forRoot(),
    routing
  ],
  declarations: [
    PortalComponent,
    NewsComponent,
    PortalHeaderComponent
  ]
})
export class PortalModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PortalComponent, routing } from './';
import { NewsComponent } from './news';
import { ApiService } from "../../api";
import { ApiModule } from "../../api/api.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ApiModule.forRoot(),
    routing
  ],
  providers: [
    ApiService
  ],
  declarations: [
    PortalComponent,
    NewsComponent
  ]
})
export class PortalModule { }

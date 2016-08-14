import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PortalComponent, routing } from './';
import { NewsComponent } from './news';
import { ApiModule } from '../api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ApiModule.forRoot(),
    routing
  ],
  declarations: [
    PortalComponent,
    NewsComponent
  ]
})
export class PortalModule { }

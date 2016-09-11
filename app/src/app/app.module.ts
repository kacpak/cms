import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { PortalModule, AuthModule } from './';
import {PageNotFoundComponent} from "./error/page-not-found.component";

@NgModule({
  imports: [
    BrowserModule,
    AuthModule,
    PortalModule,
    routing
  ],
  declarations: [ AppComponent, PageNotFoundComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

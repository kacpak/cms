import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import {routing} from './app.routing';
import {AppComponent, SharedModule, PortalModule, AuthModule, PageNotFoundComponent} from './';

@NgModule({
  imports: [
    BrowserModule,
    AuthModule,
    PortalModule,
    SharedModule,
    routing
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

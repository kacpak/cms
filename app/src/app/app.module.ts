import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import {routing} from './app.routing';
import {AppComponent, SharedModule, PortalModule, AuthModule, PageNotFoundComponent} from './';
import {AdminModule} from './admin/admin.module';

@NgModule({
  imports: [
    BrowserModule,
    AuthModule,
    PortalModule,
    SharedModule,
    AdminModule,
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

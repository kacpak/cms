import {NgModule, LOCALE_ID} from '@angular/core';
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
    Title,
    { provide: LOCALE_ID, useValue: 'pl-PL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

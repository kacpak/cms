import {NgModule} from '@angular/core';

import {ApiModule} from '../api';
import {routing} from './auth.routing';
import {AuthComponent} from './auth.component';
import {LoginComponent } from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ApiModule.forRoot(),
    routing
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    LogoutComponent
  ]
})
export class AuthModule { }

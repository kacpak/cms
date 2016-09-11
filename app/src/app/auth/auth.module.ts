import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ApiModule } from '../api';
import { routing } from './auth.routing';
import {AuthComponent} from "./auth.component";
import { LoginComponent } from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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

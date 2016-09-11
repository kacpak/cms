import {RouterModule} from '@angular/router';
import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./login/login.component";
import {ModuleWithProviders} from "@angular/core";
import {LogoutComponent} from "./logout/logout.component";

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
      { path: '**', redirectTo: 'login' }
    ]
  }
]);

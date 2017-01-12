import {RouterModule} from '@angular/router';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {ModuleWithProviders} from '@angular/core';
import {LogoutComponent} from './logout/logout.component';
import {AuthGuard} from '../api/guards';
import {SettingsComponent} from './settings';

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
      { path: '**', redirectTo: 'login' }
    ]
  }
]);

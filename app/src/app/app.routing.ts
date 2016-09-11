import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from "./error/page-not-found.component";

export const appRoutes: Routes = [
  { path: 'portal', loadChildren: 'app/portal/portal.module#PortalModule' },
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: '**', component: PageNotFoundComponent }
];
export const routing = RouterModule.forRoot(appRoutes);

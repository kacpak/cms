import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', loadChildren: 'app/portal/portal.module#PortalModule' }
];
export const routing = RouterModule.forRoot(appRoutes);

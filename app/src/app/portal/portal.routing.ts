import {RouterModule} from '@angular/router';

import {NewsComponent, NewsListComponent} from './news';
import {PortalComponent} from './portal.component';
import {SettingsComponent} from './settings';

export const routing = RouterModule.forChild([
  {
    path: '', component: PortalComponent,
    children: [
      { path: '', component: NewsListComponent, pathMatch: 'full' },
      { path: 'news/:id', component: NewsComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  }
]);

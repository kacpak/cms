import {RouterModule} from '@angular/router';

import {NewsComponent} from './news';
import {PortalComponent} from "./portal.component";

export const routing = RouterModule.forChild([
  {
    path: '',
    component: PortalComponent,
    children: [
      {
        path: '',
        component: NewsComponent
      }
    ]
  }
]);

import {RouterModule} from '@angular/router';

import {NewsListComponent} from './news-list';
import {PortalComponent} from "./portal.component";
import {NewsComponent} from "./news/news.component";

export const routing = RouterModule.forChild([
  {
    path: '', component: PortalComponent,
    children: [
      { path: '', component: NewsListComponent, pathMatch: 'full' },
      { path: 'news/:id', component: NewsComponent }
    ]
  }
]);

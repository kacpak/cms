import { Component } from '@angular/core'
import { PortalHeaderComponent } from './ui'
import { ApiService } from '../api';

@Component({
  selector: 'portal',
  directives: [
    PortalHeaderComponent
  ],
  templateUrl: 'portal.component.html'
})
export class PortalComponent {
  brand: string;
  version: string;

  constructor(private api: ApiService) {
    this.brand = 'kasprzakCMS';

    api.getLumenVersion().subscribe(
      version => this.version = version
    );
  }
}

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
  userName: string;

  constructor(private api: ApiService) {
    this.brand = 'kasprzakCMS';
  }

  ngOnInit() {
    this.api.getLumenVersion().subscribe(
      version => this.version = version
    );
    this.api.authorize('test@test.pl', 'pass').subscribe(
      _ => this.api.getUser().subscribe(
        user => this.userName = user.name + ' ' + user.email
      )
    );
  }
}

import { Component } from '@angular/core'
import { AuthService } from '../api';
import {User} from "../../typings/responses/responses";

@Component({
  selector: 'portal',
  templateUrl: 'portal.component.html'
})
export class PortalComponent {
  version: string;
  user: User;
  authenticated: boolean;

  constructor(private api: AuthService) {
    this.authenticated = api.isAuthenticated();
    this.user = {
      name: '',
      email: ''
    };
  }

  ngOnInit() {
    this.api.getLumenVersion().subscribe(
      version => this.version = version
    );
    this.api.getUser().subscribe(
      user => this.user = user
    )
  }
}

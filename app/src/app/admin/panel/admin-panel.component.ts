import { Component } from '@angular/core';
import {UserService} from '../../api/services/user.service';
import {UserStore} from '../../api/services/user.store';
import {User} from '../../../models/responses';
import {Permissions} from '../../api/guards/permissions';

@Component({
  selector: 'admin-panel',
  templateUrl: 'admin-panel.component.html'
})
export class AdminPanelComponent {

  private user: User;

  constructor(private userService: UserService, private userStore: UserStore) {
    this.userService.getUser().subscribe();
    this.userStore.changes.subscribe(user => this.user = user);
  }

  canAccessNewsPanel(): boolean {
    return Permissions.canAccessNewsPanel(this.user.role);
  }

  canAccessArticlesPanel(): boolean {
    return Permissions.canAccessArticlesPanel(this.user.role);
  }

  canAccessMenuPanel(): boolean {
    return Permissions.canAccessMenuPanel(this.user.role);
  }

  canAccessMultimediaPanel(): boolean {
    return Permissions.canAccessMultimediaPanel(this.user.role);
  }

  canAccessUsersPanel(): boolean {
    return Permissions.canAccessUsersPanel(this.user.role);
  }
}

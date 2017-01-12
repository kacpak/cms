import {Component} from '@angular/core';
import {UserService} from '../../api/services/user.service';
import {User} from '../../../models/responses';
import {UserStore} from '../../api/services/user.store';

@Component({
  selector: 'settings',
  templateUrl: 'settings.component.html'
})
export class SettingsComponent {

  user: User;
  active: boolean;
  error: boolean;
  errorMessage: string;

  constructor(private userService: UserService, private store: UserStore) {
    this.active = true;
    this.store.changes.subscribe((user: User) => this.user = user);
  }

  ngOnInit() {
    this.userService.getUser().subscribe();
  }

  onUserUpdate() {
    this.active = false;
    this.error = false;
    this.errorMessage = '';

    if (this.user.password || this.user.repeated_password) {
      if (this.user.password !== this.user.repeated_password) {
        this.active = true;
        this.error = true;
        this.errorMessage = 'Podane hasła nie są identyczne';
        return;
      }
    }

    this.userService.updateUser(this.user).subscribe(
      (user: User) => {
        this.active = true;
        this.user = user;
      },
      error => {
        this.active = true;
        this.error = true;
      }
    );
  }
}

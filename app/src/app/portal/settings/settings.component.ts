import {Component} from '@angular/core'
import {UserService} from "../../api/services/user.service";
import {User} from "../../../typings/responses/responses";
import {UserStore} from "../../api/services/user.store";

@Component({
  selector: 'settings',
  templateUrl: 'settings.component.html'
})
export class SettingsComponent {

  user: User;
  active: boolean;

  constructor(private api: UserService, private store: UserStore) {
    this.active = true;
    this.store.changes.subscribe((user: User) => this.user = user);
  }

  ngOnInit() {
    this.api.getUser().subscribe();
  }

  onUserUpdate() {
    alert('Not Yet Implemented');
  }
}

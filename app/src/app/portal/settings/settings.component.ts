import {Component} from '@angular/core'
import {UserService} from "../../api/services/user.service";
import {User} from "../../../typings/responses/responses";

@Component({
  selector: 'settings',
  templateUrl: 'settings.component.html'
})
export class SettingsComponent {

  user: User;
  active: boolean;

  constructor(private api: UserService) {
    this.user = {};
    this.active = false;
  }

  ngOnInit() {
    this.api.getUser().subscribe((user: User) => {
      this.user = user;
      this.active = true;
    });
  }

  onUserUpdate() {
    alert('Not Yet Implemented');
  }
}

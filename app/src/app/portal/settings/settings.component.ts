import {Component} from '@angular/core'
import {UserService} from "../../api/services/user.service";
import {User} from "../../../typings/responses/responses";

@Component({
  selector: 'settings',
  templateUrl: 'settings.component.html'
})
export class SettingsComponent {

  user: User;

  constructor(private api: UserService) {
    this.user = {};
  }

  ngOnInit() {
    this.api.getUser().subscribe(
      (user: User) => this.user = user
    );
  }
}

import {Component} from '@angular/core'
import {AuthService, UserService} from '../api';
import {User} from "../../typings/responses/responses";
import {Subscription} from "rxjs";

@Component({
  selector: 'portal',
  templateUrl: 'portal.component.html'
})
export class PortalComponent {
  version: string;
  user: User;
  authenticated: boolean;
  userSubscription: Subscription;
  versionSubscription: Subscription;

  constructor(private api: AuthService, private userService: UserService) {
    this.authenticated = api.isAuthenticated();
    this.user = {
      name: '',
      email: ''
    };

  }

  ngOnInit() {
    this.versionSubscription = this.api.getLumenVersion().subscribe(
      version => this.version = version
    );
    this.userSubscription = this.userService.getUser().subscribe(
      user => this.user = user
    )
  }

  ngOnDestroy() {
    this.versionSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}

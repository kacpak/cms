import { Component } from '@angular/core';
import {User} from '../../../models/responses';
import {AuthService} from '../../api/services/auth.service';
import {Router} from '@angular/router';
import {UserService} from "../../api/services/user.service";

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  model: User;
  active: boolean = true;
  error: boolean = false;

  constructor(private api: AuthService, private userService: UserService,  private router: Router) {
    this.model = {};
  }

  onLogin() {
    let loginError = (active: boolean) => {
      this.active = active;
      this.error = active;
    };
    loginError(false);

    this.api.signIn(this.model.email, this.model.password).subscribe(
      _ => {
        this.userService.getUser().subscribe(
          user => this.router.navigate(['/']),
          error => loginError(true)
        );
      },
      error => loginError(true)
    );
  }
}

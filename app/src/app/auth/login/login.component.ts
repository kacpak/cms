import { Component } from '@angular/core'
import {User} from "../../../typings/responses/responses";
import {AuthService} from "../../api/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  model: User;
  active: boolean = true;

  constructor(private api: AuthService, private router: Router) {
    this.model = {}
  }

  onLogin() {
    this.active = false;
    this.api.signIn(this.model.email, this.model.password).subscribe(
      _ => this.router.navigate(['/']),
      error => this.active = true
    )
  }
}

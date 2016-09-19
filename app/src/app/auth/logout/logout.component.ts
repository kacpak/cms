import { Component } from '@angular/core'
import {AuthService} from "../../api/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'logout',
  template: ''
})
export class LogoutComponent {
  constructor(private api: AuthService, private router: Router) {
    api.signOut();
    router.navigate(['/'])
  }
}

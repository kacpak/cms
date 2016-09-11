import { Component } from '@angular/core'
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'logout',
  template: ''
})
export class LogoutComponent {
  constructor(private api: ApiService, private router: Router) {
    api.signOut();
    router.navigate(['/'])
  }
}

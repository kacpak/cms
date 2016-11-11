import {Component, OnInit} from '@angular/core'
import {AuthService, UserService} from '../api';
import {User} from "../../typings/responses/responses";
import {Subscription} from "rxjs";
import {UserStore} from "../api/services/user.store";

@Component({
  selector: 'portal',
  templateUrl: 'portal.component.html'
})
export class PortalComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe();
  }
}

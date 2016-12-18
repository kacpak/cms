import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AuthService} from './api/services/auth.service';
import {UserService} from './api/services/user.service';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  brand: string;

  constructor(private titleService: Title, private api: AuthService, private userService: UserService) {
    this.brand = process.env.data.siteTitle;
    this.titleService.setTitle(this.brand);
  }

  ngOnInit(): void {
    if (this.api.isAuthenticated()) {
      this.userService.getUser().subscribe();
    }
  }
}

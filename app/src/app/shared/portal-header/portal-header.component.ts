import {Component, Input} from '@angular/core';
import {AuthService} from "../../api/services/auth.service";
import {UserStore} from "../../api/services/user.store";
import {User, Role} from "../../../typings/responses/responses";
import {UserService} from "../../api/services/user.service";
import {Permissions} from "../../api/guards/permissions";

interface MenuItem {
  href: string;
  text: string;
}

// TODO implement store for link
@Component({
  selector: 'portal-header',
  templateUrl: 'portal-header.component.html'
})
export class PortalHeaderComponent {
  @Input() title: string;
  links: MenuItem[];
  authenticated: boolean;
  user: User;

  constructor(private api: AuthService, private store: UserStore, private userService: UserService) {
    this.authenticated = this.api.isAuthenticated();
    this.store.changes.subscribe((user: User) => this.user = user);
  }

  ngOnInit() {
    this.links = this.getMenuItems();
    this.userService.getUser().subscribe();
  }

  ngDoCheck() {
    this.authenticated = this.api.isAuthenticated();
    this.links = this.getMenuItems();
  }

  getMenuItems(): MenuItem[] {
    let items: MenuItem[] = [];

    items.push({href: '/', text: 'Strona Główna'});

    if (this.authenticated) {
      if (Permissions.isAdminPanelAllowed(this.user.role)) {
        items.push({href: '/admin', text: 'Administracja'});
      }
      items.push({href: '/settings', text: 'Ustawienia'});
      items.push({href: '/auth/logout', text: 'Wyloguj'});

    } else {
      items.push({href: '/auth/login', text: 'Zaloguj'});
    }

    return items;
  }
}

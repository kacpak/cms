import {Component, Input} from '@angular/core';
import {AuthService} from "../../api/services/auth.service";
import {UserStore} from "../../api/services/user.store";
import {User, Role} from "../../../typings/responses/responses";
import {UserService} from "../../api/services/user.service";
import {Permissions} from "../../api/guards/permissions";

interface MenuItem {
  href: string;
  text: string;
  exact: boolean;
}

@Component({
  selector: 'portal-header',
  templateUrl: 'portal-header.component.html'
})
export class PortalHeaderComponent {
  @Input() title: string;
  links: MenuItem[];
  authenticated: boolean;
  user: User;

  constructor(private api: AuthService, private userStore: UserStore) {
    this.authenticated = this.api.isAuthenticated();
    this.userStore.changes.subscribe((user: User) => this.user = user);
  }

  ngOnInit() {
    this.links = this.getMenuItems();
  }

  ngDoCheck() {
    this.authenticated = this.api.isAuthenticated();
    this.links = this.getMenuItems();
  }

  getMenuItems(): MenuItem[] {
    let items: MenuItem[] = [];

    items.push({href: '/', text: 'Strona Główna', exact: true});

    if (this.authenticated) {
      if (Permissions.canAccessAdminPanel(this.user.role)) {
        items.push({href: '/admin', text: 'Administracja', exact: false});
      }
      items.push({href: '/settings', text: 'Ustawienia', exact: true});
      items.push({href: '/auth/logout', text: 'Wyloguj', exact: true});

    } else {
      items.push({href: '/auth/login', text: 'Zaloguj', exact: true});
    }

    return items;
  }
}

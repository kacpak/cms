import {Component, Input} from '@angular/core';
import {AuthService} from "../../api/services/auth.service";

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

  constructor(private api: AuthService) {
    this.authenticated = this.api.isAuthenticated();
  }

  ngOnInit() {
    this.links = this.getMenuItems();
  }

  ngDoCheck() {
    if (this.authenticated != this.api.isAuthenticated()) {
      this.authenticated = this.api.isAuthenticated();
      this.links = this.getMenuItems();
    }
  }

  getMenuItems(): MenuItem[] {
    let items: MenuItem[] = [];

    items.push({href: '/', text: 'Strona Główna'});

    if (this.authenticated) {
      items.push({href: '/settings', text: 'Ustawienia'});
      items.push({href: '/auth/logout', text: 'Wyloguj'});
    } else {
      items.push({href: '/auth/login', text: 'Zaloguj'});
    }

    return items;
  }
}

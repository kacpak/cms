import {Component, Input} from '@angular/core';
import {AuthService} from "../../api/auth.service";

interface Link {
  href: string;
  text: string;
}
// TODO implement store for link
// TODO login and logout should update on depending on authentication state
@Component({
  selector: 'portal-header',
  templateUrl: 'portal-header.component.html'
})
export class PortalHeaderComponent {
  @Input() title: string;
  links: Link[];

  constructor(private api: AuthService) {
    this.links = [];
  }

  ngOnInit() {
    this.links.push({href: '/', text: 'Strona Główna'});
    this.links.push(this.api.isAuthenticated()
      ? {href: '/auth/logout', text: 'Wyloguj'}
      : {href: '/auth/login', text: 'Zaloguj'});
  }
}

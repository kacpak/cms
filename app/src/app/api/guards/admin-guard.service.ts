import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';
import {User} from '../../../models/responses';
import {Permissions} from './permissions';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.getSelf().map((user: User) => {
      let hasAccess = Permissions.canAccessAdminPanel(user.role);

      if (!hasAccess) {
        this.router.navigateByUrl('/');
      }
      return hasAccess;
    }).catch(error => Observable.of(false));
  }
}

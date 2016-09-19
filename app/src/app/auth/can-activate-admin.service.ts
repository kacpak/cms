import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../api/services/auth.service";

@Injectable()
export class CanActivateAdminService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  // TODO change to checking user permissions when they will be added
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/auth/login']);
    }
    return this.auth.isAuthenticated();
  }
}

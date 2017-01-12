import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../../../models/responses';
import {UserService} from "../../../api/services/user.service";

@Component({
  selector: 'add-user',
  templateUrl: 'add-user.component.html'
})
export class AddUserComponent {

  user: User = { role: 'user' };
  active: boolean = true;
  error: boolean = false;
  roles: string[] = ['user', 'writer', 'editor', 'administrator'];

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.active = false;
    this.error = false;
    this.userService.createUser(this.user).subscribe(
      user => this.router.navigateByUrl('/admin/users'),
      error => {
        this.active = true;
        this.error = true;
      }
    );
  }

  generateRandomPassword() {
    this.user.password = Math.random().toString(36).slice(-8);
  }

}

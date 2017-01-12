import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {User} from '../../../../models/responses';
import {UserService} from "../../../api/services/user.service";

@Component({
  selector: 'edit-user',
  templateUrl: 'edit-user.component.html'
})
export class EditUserComponent implements OnInit {

  user: User = {};
  active: boolean = false;
  error: boolean = false;
  roles: string[] = ['user', 'writer', 'editor', 'administrator'];

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.userService.getUser(id).subscribe(
        user => {
          this.user = user;
          this.active = true;
        },
        error => this.router.navigateByUrl('/admin/users')
      );
    });
  }

  onSubmit() {
    this.active = false;
    this.error = false;
    this.userService.updateUser(this.user).subscribe(
      user => {},
      error => this.error = true,
      () => this.active = true
    );
  }

  generateRandomPassword() {
    this.user.password = Math.random().toString(36).slice(-8);
  }

}

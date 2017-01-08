import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {Modal} from '../../../shared/modal-util/modal-util';
import {User} from '../../../../typings/responses/responses';
import {UserService} from '../../../api/services/user.service';

@Component({
  selector: 'users-list',
  templateUrl: 'users-list.component.html'
})
export class UsersListComponent implements OnInit, OnDestroy {

  users: User[] = [];

  private allUsersSubscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.renewSubscription();
  }

  ngOnDestroy(): void {
    this.allUsersSubscription.unsubscribe();
  }

  onDelete(id: number, fieldset?: HTMLElement) {
    let user = this.users.find((foundUser: User) => foundUser.id === id);

    Modal.getDangerDialog()
      .content(`Czy na pewno chcesz usunąć użytkownika '${user.name}'?`)
      .header('Usuwanie')
      .confirm('Usuń')
      .onResolve(() => {
        if (fieldset) {
          jQuery(fieldset).attr('disabled', 'disabled');
        }
        this.userService.deleteUser(id).subscribe(
          (isDeleted: boolean) => this.renewSubscription(),
          (error: any) => {
            jQuery(fieldset).removeAttr('disabled');
          }
        );
      })
      .show();
  }

  private renewSubscription() {
    if (this.allUsersSubscription) {
      this.allUsersSubscription.unsubscribe();
    }
    this.allUsersSubscription = this.userService.getUsers().subscribe(users => this.users = users);
  }
}

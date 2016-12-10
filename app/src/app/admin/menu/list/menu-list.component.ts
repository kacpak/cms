import {Component, OnInit} from '@angular/core'
import {MenuItem} from "../../../../typings/responses/responses";
import {MenuService} from "../../../api/services/menu.service";
import {Modal} from "../../../shared/modal-util/modal-util";

@Component({
  selector: 'menu-list',
  templateUrl: 'menu-list.component.html'
})
export class ListMenuComponent implements OnInit {

  menuItems: MenuItem[] = [];
  newMenuItem: MenuItem = {} as MenuItem;
  isAddNewItemVisible: boolean;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenuData().subscribe((menuItems: MenuItem[]) => this.menuItems = menuItems);
  }

  onDelete(id: number, fieldset?: HTMLElement) {
    let item = this.menuItems.find((item: MenuItem) => item.id == id);

    Modal.getDangerDialog()
      .content(`Czy na pewno chcesz usunąć news "${item.name}"?`)
      .header('Usuwanie')
      .confirm('Usuń')
      .onResolve(() => {
        alert('No yet implemented');
      })
      .show();
  }
}

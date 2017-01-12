import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../../../../models/responses';
import {MenuService} from '../../../api/services/menu.service';
import {Modal} from '../../../shared/modal-util/modal-util';
import {SortablejsOptions} from "angular-sortablejs";
import {Alert} from "../../../shared/alert-util/alert-util";

@Component({
  selector: 'menu-list',
  templateUrl: 'menu-list.component.html'
})
export class ListMenuComponent implements OnInit {

  menuItems: MenuItem[] = [];
  sortableOptions: SortablejsOptions;

  constructor(private menuService: MenuService) {
    this.sortableOptions = {
      handle: '.pointer-move',
      onUpdate: (event) => {
        this.menuItems.forEach((item: MenuItem, index: number) => {
          item.order = index;
        });
        this.menuService.saveMenuOrder(this.menuItems).subscribe(
          () => Alert.getInfoAlert().content('Kolejność menu została zapisana.').show()
        );
      }
    }
  }

  ngOnInit(): void {
    this.menuService.getMenuData().subscribe((menuItems: MenuItem[]) => this.menuItems = menuItems);
  }

  onSave(id: number, fieldset?: HTMLElement) {
    if (fieldset) {
      jQuery(fieldset).attr('disabled', 'disabled');
    }
    let item = this.menuItems.find((foundItem: MenuItem) => foundItem.id === id);
    this.menuService.updateMenuItem(item).subscribe(
      () => {},
      (error: any) => {},
      () => jQuery(fieldset).removeAttr('disabled')
    );
  }

  onDelete(id: number, fieldset?: HTMLElement) {
    let item = this.menuItems.find((foundItem: MenuItem) => foundItem.id === id);

    Modal.getDangerDialog()
      .content(`Czy na pewno chcesz usunąć news '${item.name}'?`)
      .header('Usuwanie')
      .confirm('Usuń')
      .onResolve(() => {
        if (fieldset) {
          jQuery(fieldset).attr('disabled', 'disabled');
        }
        this.menuService.deleteMenuItem(id)
          .subscribe(
            () => this.menuService.getMenuData().subscribe((menuItems: MenuItem[]) => this.menuItems = menuItems),
            (error: any) => {
              jQuery(fieldset).removeAttr('disabled');
            }
          );
      })
      .show();
  }
}

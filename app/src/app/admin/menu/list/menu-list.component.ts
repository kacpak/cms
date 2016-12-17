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

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenuData().subscribe((menuItems: MenuItem[]) => this.menuItems = menuItems);
  }

  onSave(id: number, fieldset?: HTMLElement) {
    if (fieldset) {
      jQuery(fieldset).attr('disabled', 'disabled');
    }
    let item = this.menuItems.find((item: MenuItem) => item.id == id);
    this.menuService.updateMenuItem(item).subscribe(
      () => {},
      (error: any) => {},
      () => jQuery(fieldset).removeAttr('disabled')
    );
  }

  onDelete(id: number, fieldset?: HTMLElement) {
    let item = this.menuItems.find((item: MenuItem) => item.id == id);

    Modal.getDangerDialog()
      .content(`Czy na pewno chcesz usunąć news "${item.name}"?`)
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
          )
      })
      .show();
  }
}

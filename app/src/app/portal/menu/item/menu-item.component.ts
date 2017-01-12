import {Component, Input} from '@angular/core';
import {MenuItem} from "../../../../models/responses";

@Component({
  selector: 'menu-item',
  templateUrl: 'menu-item.component.html'
})
export class MenuItemComponent {
  @Input() item: MenuItem;
}

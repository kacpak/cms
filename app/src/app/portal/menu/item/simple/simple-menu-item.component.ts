import {Component, Input} from '@angular/core';
import {MenuItem} from "../../../../../models/responses";

@Component({
  selector: 'simple-menu-item',
  templateUrl: 'simple-menu-item.component.html'
})
export class SimpleMenuItemComponent {
  @Input() item: MenuItem;

  isExternal(): boolean {
    return this.item && this.item.href && !!this.item.href.match(/^https?:\/\//);
  }
}

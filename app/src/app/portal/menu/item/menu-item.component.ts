import {Component, OnInit, Input} from '@angular/core';
// import {MenuItem} from "../../../../typings/responses/responses";

@Component({
  selector: 'menu-item',
  templateUrl: 'menu-item.component.html'
})
export class MenuItemComponent {
  @Input() item: any = { href: '' };

  isExternal(): boolean {
    return this.item && this.item.href && this.item.href.match(/^http:\/\//);
  }
}

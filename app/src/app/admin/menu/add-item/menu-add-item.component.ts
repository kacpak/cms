import {Component, OnInit, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {MenuItem} from '../../../../typings/responses/responses';
import {MenuService} from '../../../api/services/menu.service';

@Component({
  selector: 'menu-add-item',
  templateUrl: 'menu-add-item.component.html'
})
export class AddMenuItemComponent implements OnInit {

  menuItem: MenuItem = {
    name: '',
    href: ''
  } as MenuItem;
  menuItems: MenuItem[] = [];
  fieldset: JQuery;

  constructor(private elementRef: ElementRef, private menuService: MenuService, private router: Router) {}

  ngOnInit(): void {
    this.menuService.getMenuData().subscribe((menuItems: MenuItem[]) => this.menuItems = menuItems);
    this.fieldset = jQuery(this.elementRef.nativeElement).find('fieldset');
  }

  onSubmit(): void {
    this.fieldset.prop('disabled', true);
    this.menuService.addMenuItem(this.menuItem).subscribe(
      response => this.goToMenuOverview(),
      error => this.fieldset.prop('disabled', false)
    );
  }

  goToMenuOverview(): void {
    this.router.navigate(['/admin/menu']);
  }
}

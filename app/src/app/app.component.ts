import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  brand: string;

  constructor(private titleService: Title) {
    this.brand = process.env.data.siteTitle;
    this.titleService.setTitle(this.brand);
  }
}

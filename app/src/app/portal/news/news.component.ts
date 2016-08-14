import { Component } from '@angular/core'

@Component({
  selector: 'news',
  templateUrl: 'news.component.html'
})
export class NewsComponent {
  name: string;

  constructor() {
    this.name = 'Mateusz';
  }
}

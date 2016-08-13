import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: '../templates/app.html',
})
export class AppComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.debug('App started');
  }

}

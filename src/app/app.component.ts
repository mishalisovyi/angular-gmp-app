import { Component, OnInit } from '@angular/core';

import { AuthFacade } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
  constructor(private authFacade: AuthFacade) {}

  ngOnInit() {
    this.authFacade.retrieveInitialAuthData();
  }
}

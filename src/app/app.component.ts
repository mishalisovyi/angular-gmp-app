import { Component, OnInit } from '@angular/core';

import { AuthFacade } from './services';
import { AuthorsFacade } from './services/store/authors/authors.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
  constructor(private authFacade: AuthFacade, private authorsFacade: AuthorsFacade) {}

  ngOnInit() {
    this.authFacade.retrieveInitialAuthData();
    this.authorsFacade.getAuthors();
  }
}

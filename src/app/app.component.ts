import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { Language } from './enums';
import { AuthFacade } from './services';
import { AuthorsFacade } from './services/store/authors/authors.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
  constructor(private translateService: TranslateService, private authFacade: AuthFacade, private authorsFacade: AuthorsFacade) {}

  ngOnInit() {
    this.setTranslationLanguage();
    this.authFacade.retrieveInitialAuthData();
    this.authorsFacade.getAuthors();
  }

  private setTranslationLanguage() {
    this.translateService.use(Language.En);
  }
}

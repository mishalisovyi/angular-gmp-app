import { Component } from '@angular/core';

import { Language } from '@app/enums';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: [ './language-select.component.scss' ],
})
export class LanguageSelectComponent {
  constructor(private translateService: TranslateService) { }

  get Language() {
    return Language;
  }

  onLanguageSelectChange(value: Event) {
    this.translateService.use((value.target as HTMLSelectElement).value);
  }
}

import { Component } from '@angular/core';

import { AuthFacade } from '@app/services';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [ './login-form.component.scss' ],
})
export class LoginFormComponent {
  username: string;
  password: string;

  constructor(private authFacade: AuthFacade) { }

  onFormSubmit() {
    this.login();
  }

  private login() {
    this.authFacade.login({ login: this.username, password: this.password });
  }
}

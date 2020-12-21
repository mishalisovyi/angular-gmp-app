import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { loginStart } from '@app/store/auth/actions/auth.actions';
import { LoadingState } from '@app/store/loading';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [ './login-form.component.scss' ],
})
export class LoginFormComponent {
  username: string;
  password: string;

  constructor(private store: Store<LoadingState>) { }

  onFormSubmit() {
    this.login();
  }

  private login() {
    this.store.dispatch(loginStart({ login: this.username, password: this.password }))
  }
}

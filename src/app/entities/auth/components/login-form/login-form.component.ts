import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutePath } from '@app/enums/app-route-path.enum';
import { ErrorMessage } from '@app/enums/error-message.enum';
import { AuthService } from '@app/services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [ './login-form.component.scss' ],
})
export class LoginFormComponent {
  username: string;
  password: string;

  constructor(private router: Router, private authService: AuthService) { }

  onFormSubmit() {
    this.login();
  }

  private login() {
    this.authService.login({ username: this.username, password: this.password }).subscribe(
      () => this.router.navigate([ AppRoutePath.Courses ]),
      () => alert(ErrorMessage.Login),
    );
  }
}

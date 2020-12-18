import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { take, tap } from 'rxjs/operators';

import { AppRoutePath, ErrorMessage } from '@app/enums';
import { AuthService } from '@app/services';

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
    this.authService.login({ login: this.username, password: this.password })
      .pipe(
        take(1),
        tap(
          () => this.navigateToCoursesPage(),
          error => alert(`${ErrorMessage.Login}: ${error}`),
      ))
      .subscribe();
  }

  private navigateToCoursesPage() {
    this.router.navigate([ AppRoutePath.Courses ]);
  }
}

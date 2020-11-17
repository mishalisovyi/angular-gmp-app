import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutePath } from '@app/enums/app-route-path.enum';
import { AuthService } from '@app/services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [ './login-form.component.scss' ],
})
export class LoginFormComponent {
  email: string;
  password: string;

  constructor(private router: Router, private authService: AuthService) { }

  login() {
    this.authService.login$(this.email, this.password).subscribe(
      () => this.router.navigate([ AppRoutePath.Courses ]),
      () => alert('An error has occured during the logging in'),
    );
  }
}

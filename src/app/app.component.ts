import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs/operators';

import { AppRoutePath } from './enums/app-route-path.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
  showBreadcrumbs = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.subscribeOnRouterEvents();
  }

  private subscribeOnRouterEvents() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(({ url }: NavigationEnd) => this.checkIfShowBreadcrumbs(url))
  }

  private checkIfShowBreadcrumbs(url: string) {
    this.showBreadcrumbs = url !== `/${AppRoutePath.Login}`
  }
}

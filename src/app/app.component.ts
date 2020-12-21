import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { AuthState } from '@app/store/auth';
import { retrieveInitialAuthData } from '@app/store/auth/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AuthState>) {}

  ngOnInit() {
    this.store.dispatch(retrieveInitialAuthData())
  }
}

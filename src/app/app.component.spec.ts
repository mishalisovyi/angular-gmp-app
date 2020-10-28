import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

@Component({ selector: 'app-header' })
class StubHeaderComponent { }

@Component({ selector: 'app-breadcrumbs' })
class StubBreadcrumbsComponent { }

@Component({ selector: 'app-footer' })
class StubFooterComponent { }

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [
        AppComponent,
        StubHeaderComponent,
        StubBreadcrumbsComponent,
        StubFooterComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

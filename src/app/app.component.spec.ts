import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { MockBreadcrumbsComponent, MockFooterComponent, MockHeaderComponent, SpinnerComponent } from './core';

describe('AppComponent', () => {
  let componentFixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [
        AppComponent,
        MockBreadcrumbsComponent,
        MockFooterComponent,
        MockHeaderComponent,
        SpinnerComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    componentFixture = TestBed.createComponent(AppComponent);
    componentFixture.detectChanges();
  });

  it('should create the app', () => {
    const app = componentFixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

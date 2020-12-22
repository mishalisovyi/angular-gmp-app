import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { MockBreadcrumbsComponent, MockFooterComponent, MockHeaderComponent, SpinnerComponent, SpinnerImageComponent } from './core';
import { mockStoreProvider } from './util/util-test';

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
        SpinnerImageComponent,
      ],
      providers: [ mockStoreProvider ],
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

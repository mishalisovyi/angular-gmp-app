import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { MockBreadcrumbsComponent } from './core/components/breadcrumbs/breadcrumbs.component.mock';
import { MockFooterComponent } from './core/components/footer/footer.component.mock';
import { MockHeaderComponent } from './core/components/header/header.component.mock';
import { SpinnerComponent } from './core/components/spinner/spinner.component';

describe('AppComponent', () => {
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

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

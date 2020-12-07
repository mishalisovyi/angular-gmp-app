import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { MockBreadcrumbsComponent } from './core/components/breadcrumbs/breadcrumbs.component.mock';
import { MockFooterComponent } from './core/components/footer/footer.component.mock';
import { MockHeaderComponent } from './core/components/header/header.component.mock';
import { SpinnerComponent } from './core/components/spinner/spinner.component';
import { BreadcrumbsService } from './services/breadcrumbs/breadcrumbs.service';

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
      providers: [ BreadcrumbsService ],
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

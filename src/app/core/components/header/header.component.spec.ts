import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent, LanguageSelectComponent, MockLogoComponent, MockUserPanelComponent } from '@app/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      declarations: [
        HeaderComponent,
        MockLogoComponent,
        MockUserPanelComponent,
        LanguageSelectComponent,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

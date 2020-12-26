import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchInputComponent } from '@app/shared';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      declarations: [ SearchInputComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search term value', waitForAsync(() => {
    const firstValue = 'a';
    const secondValue = 'ab';
    const utimateValue = 'abc';

    component.searchTermChanged.subscribe(value => expect(value).toBe(utimateValue));
    component.ngAfterViewInit();

    component.searchControl.setValue(firstValue);
    component.searchControl.setValue(secondValue);
    component.searchControl.setValue(utimateValue);
  }));
});

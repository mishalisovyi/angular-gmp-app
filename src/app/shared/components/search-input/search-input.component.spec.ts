import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SearchInputComponent } from '@app/shared';
import { getFixtureDebugElementBySelector } from '@app/util/util-test';

const dispatchKeyupEvent = (element: HTMLInputElement, value: string) => {
  element.value = value;
  element.dispatchEvent(new Event('keyup'));
}

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
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
    const searchInput = getFixtureDebugElementBySelector(fixture, '.form-group__control');

    const firstValue = 'a';
    const secondValue = 'ab';
    const utimateValue = 'abc';

    component.searchTermChanged.subscribe(value => expect(value).toBe(utimateValue));
    component.ngAfterViewInit();

    dispatchKeyupEvent(searchInput.nativeElement, firstValue)
    dispatchKeyupEvent(searchInput.nativeElement, secondValue)
    dispatchKeyupEvent(searchInput.nativeElement, utimateValue)
  }));
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SearchInputComponent } from './search-input.component';

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

  it('should emit `search` event when click on `Search` button', () => {
    const searchEmitSpy = spyOn(component.search, 'emit');

    const mockSearchString = 'test';
    component.searchString = mockSearchString;

    const searchButton = fixture.debugElement.query(By.css('.button.button--large.button--green'))
    searchButton.triggerEventHandler('click', null);

    expect(searchEmitSpy).toHaveBeenCalledWith(mockSearchString);
  });
});

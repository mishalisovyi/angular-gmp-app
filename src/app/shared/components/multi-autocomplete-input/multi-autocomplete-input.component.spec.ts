import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@app/material.module';

import { MultiAutocompleteInputComponent } from './multi-autocomplete-input.component';

describe('MultiAutocompleteInputComponent', () => {
  let component: MultiAutocompleteInputComponent;
  let fixture: ComponentFixture<MultiAutocompleteInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MaterialModule,
      ],
      declarations: [ MultiAutocompleteInputComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiAutocompleteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

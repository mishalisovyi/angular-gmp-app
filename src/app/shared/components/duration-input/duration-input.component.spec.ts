import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TimeDurationPipe } from '@app/shared/pipes/time-duration/time-duration.pipe';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DurationInputComponent } from './duration-input.component';

describe('DurationInputComponent', () => {
  let component: DurationInputComponent;
  let fixture: ComponentFixture<DurationInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule,
        FormsModule,
      ],
      declarations: [
        DurationInputComponent,
        TimeDurationPipe,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

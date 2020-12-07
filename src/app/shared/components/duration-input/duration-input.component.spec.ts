import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TimeDurationPipe } from '@app/shared/pipes/time-duration/time-duration.pipe';
import { getFixtureDebugElementBySelector } from '@app/util/util-test';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DurationInputComponent } from './duration-input.component';

const testDurationValue = 100;

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

  it('should properly handle ngModelChange event', () => {
    const durationChangeEmitSpy = spyOn(component.durationChange, 'emit');
    getFixtureDebugElementBySelector(fixture, '.form-group__control').triggerEventHandler('ngModelChange', testDurationValue);

    expect(component.duration).toBe(testDurationValue);
    expect(durationChangeEmitSpy).toHaveBeenCalledWith(component.duration);
  });
});

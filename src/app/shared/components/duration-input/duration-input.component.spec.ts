import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DurationInputComponent, TimeDurationPipe } from '@app/shared';
import { getFixtureDebugElementBySelector } from '@app/util/util-test';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    component.registerOnChange(() => {});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should properly handle ngModelChange event', () => {
    getFixtureDebugElementBySelector(fixture, '.form-group__control').triggerEventHandler('ngModelChange', testDurationValue);

    expect(component.duration).toBe(testDurationValue);
  });
});

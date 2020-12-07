import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-duration-input',
  template: '',
})
export class MockDurationInputComponent {
  @Input() duration = 0;
  @Output() durationChange = new EventEmitter<number>();
}

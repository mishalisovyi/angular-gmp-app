import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appShowCourseStatus]',
})
export class ShowCourseStatusDirective implements OnInit {
  FOURTEEN_DAYS_IN_MILLISECONDS = 1000 * 60 * 60 * 24 * 14;
  COLORS = {
    BLUE: '#009ECC',
    GREEN: '#67A300',
    TRANSPARENT: 'transparent',
  }

  @HostBinding('style.border-color')
  borderColor = this.COLORS.TRANSPARENT;

  @Input('appShowCourseStatus') creationDate: Date;

  ngOnInit() {
    this.calculateBorderColor(this.creationDate);
  }

  calculateBorderColor(courseCreationDate: Date) {
    const courseCreationTimestamp = courseCreationDate.valueOf();
    const nowTimestamp = new Date().valueOf();

    if (courseCreationTimestamp > nowTimestamp) {
      this.borderColor = this.COLORS.BLUE
    }

    if (courseCreationTimestamp < nowTimestamp && courseCreationTimestamp >= nowTimestamp - this.FOURTEEN_DAYS_IN_MILLISECONDS) {
      this.borderColor = this.COLORS.GREEN
    }
  }
}

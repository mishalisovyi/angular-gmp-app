import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from '@app/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FontAwesomeModule ],
      declarations: [ LogoComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

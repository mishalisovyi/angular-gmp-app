import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockLoginFormComponent } from '@app/entities/auth/components/login-form/login-form.component.mock';
import { LoginPageComponent } from '@app/pages/login-page/login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginPageComponent,
        MockLoginFormComponent,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

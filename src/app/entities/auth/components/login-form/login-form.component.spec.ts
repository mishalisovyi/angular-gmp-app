import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AuthService, mockAuthServiceProvider } from '@app/services';
import { mockRouterProvider } from '@app/util/util-test';

import { LoginFormComponent } from './login-form.component';

const MOCK_EMAIL = 'test@mail.com';
const MOCK_PASSWORD = 'abc123';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ LoginFormComponent ],
      providers: [
        mockAuthServiceProvider,
        mockRouterProvider,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    authService = TestBed.inject(AuthService);

    component = fixture.componentInstance;
    component.username = MOCK_EMAIL;
    component.password = MOCK_PASSWORD;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should properly handle logging in', () => {
    const authServiceLoginSpy = spyOn(authService, 'login').and.callThrough();
    component.onFormSubmit();

    expect(authServiceLoginSpy).toHaveBeenCalledWith({ username: MOCK_EMAIL, password: MOCK_PASSWORD });
  });
});

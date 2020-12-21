import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { loginStart } from '@app/store/auth/actions/auth.actions';
import { MockStore, mockStoreProvider } from '@app/util/util-test';

import { LoginFormComponent } from './login-form.component';

const MOCK_EMAIL = 'test@mail.com';
const MOCK_PASSWORD = 'abc123';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ LoginFormComponent ],
      providers: [ mockStoreProvider ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);

    component = fixture.componentInstance;
    component.username = MOCK_EMAIL;
    component.password = MOCK_PASSWORD;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should properly handle logging in', () => {
    component.onFormSubmit();

    expect(MockStore.dispatch).toHaveBeenCalledWith(loginStart({ login: component.username, password: component.password }));
  });
});

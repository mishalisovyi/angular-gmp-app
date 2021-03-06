import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { requestLogin } from '@app/store/auth/actions/auth.actions';
import { MockStore, mockStoreProvider } from '@app/util/util-test';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { LoginFormComponent } from './login-form.component';

const MOCK_EMAIL = 'test@mail.com';
const MOCK_PASSWORD = 'abc123';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
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
    component.onFormSubmit(true);

    expect(MockStore.dispatch).toHaveBeenCalledWith(requestLogin({ login: component.username, password: component.password }));
  });
});

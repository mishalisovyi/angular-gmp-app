import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from '@app/services/auth/auth.service';
import { mockAuthServiceProvider } from '@app/services/auth/auth.service.mock';
import { mockRouterProvider } from '@app/util/util';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UserPanelComponent } from './user-panel.component';

describe('UserPanelComponent', () => {
  let component: UserPanelComponent;
  let fixture: ComponentFixture<UserPanelComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FontAwesomeModule ],
      declarations: [ UserPanelComponent ],
      providers: [
        mockAuthServiceProvider,
        mockRouterProvider,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPanelComponent);
    authService = TestBed.inject(AuthService);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should properly handle logging out', () => {
    const authServiceLogoutSpy = spyOn(authService, 'logout$').and.callThrough();
    component.logout();

    expect(authServiceLogoutSpy).toHaveBeenCalled();
  });
});

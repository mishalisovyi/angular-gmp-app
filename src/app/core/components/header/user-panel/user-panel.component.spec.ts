import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPanelComponent } from '@app/core';
import { logout } from '@app/store/auth/actions/auth.actions';
import { mockRouterProvider, MockStore, mockStoreProvider } from '@app/util/util-test';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('UserPanelComponent', () => {
  let component: UserPanelComponent;
  let fixture: ComponentFixture<UserPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      declarations: [ UserPanelComponent ],
      providers: [
        mockRouterProvider,
        mockStoreProvider,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should properly handle logging out', () => {
    component.logout();

    expect(MockStore.dispatch).toHaveBeenCalledWith(logout());
  });
});

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { environment } from '@env/environment';

import { AuthService } from './auth.service';

const { APIUrl } = environment;

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });

    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should properly handle login', waitForAsync(() => {
    const mockLogin = 'test@mail.com';
    const mockPassword = 'abc123';
    const mockToken = '123456abcdef';
    const mockResponse = { token: mockToken };

    const endpointURL = `${APIUrl}/auth/login`;

    service.login({ login: mockLogin, password: mockPassword }).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const applicationLabelPairsRequest = httpTestingController.expectOne(endpointURL);
    expect(applicationLabelPairsRequest.request.method).toBe('POST');

    applicationLabelPairsRequest.flush(mockResponse);
  }));

  it('should properly handle logout', waitForAsync(() => {
    const localStorageRemoveItemSpy = spyOn(localStorage, 'removeItem');

    service.logout()
    expect(localStorageRemoveItemSpy).toHaveBeenCalledTimes(2);
  }));
});

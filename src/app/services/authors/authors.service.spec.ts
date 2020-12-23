import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { environment } from '@env/environment';

import { AuthorsService } from './authors.service';
import { mockAuthors } from './authors.service.mock';

const { APIUrl } = environment;

describe('AuthorsService', () => {
  let service: AuthorsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(AuthorsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load authors', waitForAsync(() => {
    const endpointURL = `${APIUrl}/authors`;

    service.getList().subscribe(response => expect(response).toEqual(mockAuthors))

    const authorsPageRequest = httpTestingController.expectOne(endpointURL);
    expect(authorsPageRequest.request.method).toBe('GET');

    authorsPageRequest.flush(mockAuthors);
  }));
});

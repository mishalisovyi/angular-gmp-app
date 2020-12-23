import { of } from 'rxjs';

import { Author } from '@app/interfaces/entities/author.interface';

import { AuthorsService } from './authors.service';

export const mockAuthors: Author[] = [
  {
    id: '123',
    name: 'Author 1',
  },
  {
    id: '456',
    name: 'Author 2',
  },
]

class MockAuthorsService {
  getList() {
    return of([]);
  }
}

export const mockAuthorsServiceProvider = { provide: AuthorsService, useClass: MockAuthorsService }

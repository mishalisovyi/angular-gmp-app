import { of } from 'rxjs';

import { ConfirmService } from './confirm.service';

class MockConfirmService {
  confirm$() {
    return of(true)
  }
}

export const mockConfirmServiceProvider = { provide: ConfirmService, useClass: MockConfirmService }

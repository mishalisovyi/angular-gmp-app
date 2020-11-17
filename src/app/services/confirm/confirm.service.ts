import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmService {
  confirm$(message: string): Observable<boolean> {
    return of(window.confirm(message));
  }
}

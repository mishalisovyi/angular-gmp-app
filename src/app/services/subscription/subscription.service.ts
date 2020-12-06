import { Injectable, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

@Injectable()
export class SubscriptionService implements OnDestroy {
  private subscriptions: Subscription[] = [];

  ngOnDestroy() {
    this.unregisterAll();
  }

  set register(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  private unregisterAll() {
    for (const subscription of this.subscriptions) {
      if (subscription) {
        subscription.unsubscribe();
      }
    }
    this.subscriptions = [];
  }
}

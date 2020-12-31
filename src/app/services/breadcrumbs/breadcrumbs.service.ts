import { Injectable } from '@angular/core';
import { ActivatedRoute, Data, NavigationEnd, Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

import { BreadcrumbsStep } from '@app/interfaces/helpers';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  private showBreadcrumbs$$ = new Subject<boolean>();
  private breadcrumbsSteps$$ = new Subject<BreadcrumbsStep[]>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscribeOnRouterEvents();
  }

  get showBreadcrumbs$(): Observable<boolean> {
    return this.showBreadcrumbs$$.asObservable();
  }

  get breadcrumbsSteps$(): Observable<BreadcrumbsStep[]> {
    return this.breadcrumbsSteps$$.asObservable();
  }

  private subscribeOnRouterEvents() {
    /**
     * There is no straightforward way to get route static data outside of <router-outlet></router-outlet> component
     * The workaround below helps to overcome this issue
     */
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.findLastActivatedRoute()),
      switchMap((({ data }) => data)),
      map(data => this.decorateBreadcrumbsArrayWithDynamicStep(data)),
      tap(data => this.handleBreadcrumbsDataEmiting(data)),
    ).subscribe();
  }

  private findLastActivatedRoute(): ActivatedRoute {
    let route = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }

    return route;
  }

  private decorateBreadcrumbsArrayWithDynamicStep(data: Data): Data {
    if (this.isCurrentRouteHasState()) {
      data.breadcrumbsSteps = [ ...data.breadcrumbsSteps, this.generateBreadcrumbsDynamicStep() ];
    }

    return data;
  }

  private handleBreadcrumbsDataEmiting({ breadcrumbsSteps }: Data) {
    const showBreadcrumbs = !!breadcrumbsSteps && breadcrumbsSteps.length;
    this.emitShowBreadcrumbs(showBreadcrumbs);

    if (!!breadcrumbsSteps) {
      this.emitBreadcrumbsSteps(breadcrumbsSteps);
    }
  }

  private isCurrentRouteHasState(): boolean {
    return !!this.router.getCurrentNavigation().extras.state;
  }

  private generateBreadcrumbsDynamicStep(): BreadcrumbsStep {
    return {
      titleTranslationKey: this.extractBreadcrumbsStepTitleFromRouteState(),
    }
  }

  private emitShowBreadcrumbs(showBreadcrumbs: boolean) {
    this.showBreadcrumbs$$.next(showBreadcrumbs);
  }

  private emitBreadcrumbsSteps(breadcrumbsSteps: BreadcrumbsStep[]) {
    this.breadcrumbsSteps$$.next(breadcrumbsSteps);
  }

  private extractBreadcrumbsStepTitleFromRouteState(): string {
    return this.router.getCurrentNavigation().extras.state.breadcrumbsStepTitle;
  }
}

import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { BehaviorSubject, of } from 'rxjs';

const routerNavigationEndSubject = new BehaviorSubject(new NavigationEnd(1, 'test', 'test'));

export const mockRouter = () => {
  return {
    events: routerNavigationEndSubject.asObservable(),
    navigate: jasmine.createSpy('navigate'),
  }
}

const mockActivatedRoute = {
  snapshot: {
    params: {
      id: 1,
    },
  },
  firstChild: of({
    data: {
      breadcrumbsSteps: [ {
        title: 'test',
      } ],
    },
  }),
}

export const getFixtureDebugElementBySelector = (fixture: ComponentFixture<any>, cssSelector: string) => {
  return fixture.debugElement.query(By.css(cssSelector));
}

export const getFixtureDebugElementsArrayBySelector = (fixture: ComponentFixture<any>, cssSelector: string) => {
  return fixture.debugElement.queryAll(By.css(cssSelector));
}

export const mockRouterProvider = { provide: Router, useValue: mockRouter() }

export const mockActivatedRouteProvider = { provide: ActivatedRoute, useValue: mockActivatedRoute }

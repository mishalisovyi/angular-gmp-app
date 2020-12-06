import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

const mockRouter = () => {
  const routerNavigationEndSubject = new BehaviorSubject(new NavigationEnd(1, 'test', 'test'));

  return {
    events: routerNavigationEndSubject.asObservable(),
    navigate: jasmine.createSpy('navigate'),
  }
}

export const getFixtureDebugElementBySelector = (fixture: ComponentFixture<any>, cssSelector: string) => {
  return fixture.debugElement.query(By.css(cssSelector));
}

export const getFixtureDebugElementsArrayBySelector = (fixture: ComponentFixture<any>, cssSelector: string) => {
  return fixture.debugElement.queryAll(By.css(cssSelector));
}

export const mockRouterProvider = { provide: Router, useValue: mockRouter() }

import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export const getFixtureDebugElementBySelector = (fixture: ComponentFixture<any>, cssSelector: string) => {
  return fixture.debugElement.query(By.css(cssSelector));
}

export const getFixtureDebugElementsArrayBySelector = (fixture: ComponentFixture<any>, cssSelector: string) => {
  return fixture.debugElement.queryAll(By.css(cssSelector));
}

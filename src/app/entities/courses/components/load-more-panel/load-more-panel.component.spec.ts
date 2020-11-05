import { ComponentFixture, TestBed } from '@angular/core/testing';

import { getFixtureDebugElementBySelector } from '@app/util/util';

import { LoadMorePanelComponent } from './load-more-panel.component';

describe('LoadMorePanelComponent', () => {
  let component: LoadMorePanelComponent;
  let fixture: ComponentFixture<LoadMorePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadMorePanelComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadMorePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit `loadMore` event when click on `Load more` button', () => {
    const onLoadMoreEmitSpy = spyOn(component.loadMore, 'emit');

    const loadMoreButton = getFixtureDebugElementBySelector(fixture, '.button.button--link')
    loadMoreButton.triggerEventHandler('click', null);

    expect(onLoadMoreEmitSpy).toHaveBeenCalled();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

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
});

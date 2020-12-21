import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerComponent, SpinnerImageComponent } from '@app/core';
import { mockStoreProvider } from '@app/util/util-test';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SpinnerComponent,
        SpinnerImageComponent,
      ],
      providers: [ mockStoreProvider ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

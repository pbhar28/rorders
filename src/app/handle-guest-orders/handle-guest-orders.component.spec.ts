import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleGuestOrdersComponent } from './handle-guest-orders.component';

describe('HandleGuestOrdersComponent', () => {
  let component: HandleGuestOrdersComponent;
  let fixture: ComponentFixture<HandleGuestOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleGuestOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleGuestOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

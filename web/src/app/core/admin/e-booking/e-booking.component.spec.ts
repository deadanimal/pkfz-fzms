import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EBookingComponent } from './e-booking.component';

describe('EBookingComponent', () => {
  let component: EBookingComponent;
  let fixture: ComponentFixture<EBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

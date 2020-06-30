import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EBookingDetailComponent } from './e-booking-detail.component';

describe('EBookingDetailComponent', () => {
  let component: EBookingDetailComponent;
  let fixture: ComponentFixture<EBookingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EBookingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EBookingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

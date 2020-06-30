import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EComplaintComponent } from './e-complaint.component';

describe('EComplaintComponent', () => {
  let component: EComplaintComponent;
  let fixture: ComponentFixture<EComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GateApplicationComponent } from './gate-application.component';

describe('GateApplicationComponent', () => {
  let component: GateApplicationComponent;
  let fixture: ComponentFixture<GateApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GateApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GateApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

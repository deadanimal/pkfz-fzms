import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GateControlComponent } from './gate-control.component';

describe('GateControlComponent', () => {
  let component: GateControlComponent;
  let fixture: ComponentFixture<GateControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GateControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GateControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

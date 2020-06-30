import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EVisitorComponent } from './e-visitor.component';

describe('EVisitorComponent', () => {
  let component: EVisitorComponent;
  let fixture: ComponentFixture<EVisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EVisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

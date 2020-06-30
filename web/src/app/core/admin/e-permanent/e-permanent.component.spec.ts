import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EPermanentComponent } from './e-permanent.component';

describe('EPermanentComponent', () => {
  let component: EPermanentComponent;
  let fixture: ComponentFixture<EPermanentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EPermanentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EPermanentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

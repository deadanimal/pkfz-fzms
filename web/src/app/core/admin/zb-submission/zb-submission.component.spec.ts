import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZbSubmissionComponent } from './zb-submission.component';

describe('ZbSubmissionComponent', () => {
  let component: ZbSubmissionComponent;
  let fixture: ComponentFixture<ZbSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZbSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZbSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

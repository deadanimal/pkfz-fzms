import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgaSubmissionComponent } from './oga-submission.component';

describe('OgaSubmissionComponent', () => {
  let component: OgaSubmissionComponent;
  let fixture: ComponentFixture<OgaSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgaSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgaSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

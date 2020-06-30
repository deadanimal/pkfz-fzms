import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseNumberComponent } from './release-number.component';

describe('ReleaseNumberComponent', () => {
  let component: ReleaseNumberComponent;
  let fixture: ComponentFixture<ReleaseNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

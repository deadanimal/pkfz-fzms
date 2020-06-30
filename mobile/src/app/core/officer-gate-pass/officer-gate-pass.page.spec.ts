import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfficerGatePassPage } from './officer-gate-pass.page';

describe('OfficerGatePassPage', () => {
  let component: OfficerGatePassPage;
  let fixture: ComponentFixture<OfficerGatePassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerGatePassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfficerGatePassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

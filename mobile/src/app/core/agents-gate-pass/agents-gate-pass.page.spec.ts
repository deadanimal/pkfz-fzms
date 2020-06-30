import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgentsGatePassPage } from './agents-gate-pass.page';

describe('AgentsGatePassPage', () => {
  let component: AgentsGatePassPage;
  let fixture: ComponentFixture<AgentsGatePassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentsGatePassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgentsGatePassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

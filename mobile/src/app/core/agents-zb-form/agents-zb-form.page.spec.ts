import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgentsZbFormPage } from './agents-zb-form.page';

describe('AgentsZbFormPage', () => {
  let component: AgentsZbFormPage;
  let fixture: ComponentFixture<AgentsZbFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentsZbFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgentsZbFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

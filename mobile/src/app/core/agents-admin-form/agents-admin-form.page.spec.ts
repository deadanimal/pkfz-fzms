import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgentsAdminFormPage } from './agents-admin-form.page';

describe('AgentsAdminFormPage', () => {
  let component: AgentsAdminFormPage;
  let fixture: ComponentFixture<AgentsAdminFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentsAdminFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgentsAdminFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

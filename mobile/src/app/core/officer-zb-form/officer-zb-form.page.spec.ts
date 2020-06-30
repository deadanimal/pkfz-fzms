import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfficerZbFormPage } from './officer-zb-form.page';

describe('OfficerZbFormPage', () => {
  let component: OfficerZbFormPage;
  let fixture: ComponentFixture<OfficerZbFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerZbFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfficerZbFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

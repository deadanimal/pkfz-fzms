import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfficerZbFormDetailPage } from './officer-zb-form-detail.page';

describe('OfficerZbFormDetailPage', () => {
  let component: OfficerZbFormDetailPage;
  let fixture: ComponentFixture<OfficerZbFormDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerZbFormDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfficerZbFormDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

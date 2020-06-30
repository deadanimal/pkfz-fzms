import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TenantGatePassPage } from './tenant-gate-pass.page';

describe('TenantGatePassPage', () => {
  let component: TenantGatePassPage;
  let fixture: ComponentFixture<TenantGatePassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantGatePassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TenantGatePassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

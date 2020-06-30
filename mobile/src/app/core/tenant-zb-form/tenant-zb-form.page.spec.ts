import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TenantZbFormPage } from './tenant-zb-form.page';

describe('TenantZbFormPage', () => {
  let component: TenantZbFormPage;
  let fixture: ComponentFixture<TenantZbFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantZbFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TenantZbFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

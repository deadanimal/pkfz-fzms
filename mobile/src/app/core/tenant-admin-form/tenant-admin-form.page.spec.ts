import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TenantAdminFormPage } from './tenant-admin-form.page';

describe('TenantAdminFormPage', () => {
  let component: TenantAdminFormPage;
  let fixture: ComponentFixture<TenantAdminFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantAdminFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TenantAdminFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

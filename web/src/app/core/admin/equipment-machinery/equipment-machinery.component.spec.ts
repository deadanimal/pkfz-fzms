import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentMachineryComponent } from './equipment-machinery.component';

describe('EquipmentMachineryComponent', () => {
  let component: EquipmentMachineryComponent;
  let fixture: ComponentFixture<EquipmentMachineryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentMachineryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentMachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

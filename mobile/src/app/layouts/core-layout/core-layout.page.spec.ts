import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoreLayoutPage } from './core-layout.page';

describe('CoreLayoutPage', () => {
  let component: CoreLayoutPage;
  let fixture: ComponentFixture<CoreLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreLayoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoreLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

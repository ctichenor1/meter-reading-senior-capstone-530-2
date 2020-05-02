import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeterreadingsPage } from './meterreadings.page';

describe('MeterreadingsPage', () => {
  let component: MeterreadingsPage;
  let fixture: ComponentFixture<MeterreadingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterreadingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeterreadingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

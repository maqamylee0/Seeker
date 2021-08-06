import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfirmedPage } from './confirmed.page';

describe('ConfirmedPage', () => {
  let component: ConfirmedPage;
  let fixture: ComponentFixture<ConfirmedPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

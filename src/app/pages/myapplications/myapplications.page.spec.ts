import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyapplicationsPage } from './myapplications.page';

describe('MyapplicationsPage', () => {
  let component: MyapplicationsPage;
  let fixture: ComponentFixture<MyapplicationsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyapplicationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyapplicationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

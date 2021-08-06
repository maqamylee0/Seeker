import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddjobPage } from './addjob.page';

describe('AddjobPage', () => {
  let component: AddjobPage;
  let fixture: ComponentFixture<AddjobPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddjobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

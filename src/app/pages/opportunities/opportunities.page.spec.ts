import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpportunitiesPage } from './opportunities.page';

describe('OpportunitiesPage', () => {
  let component: OpportunitiesPage;
  let fixture: ComponentFixture<OpportunitiesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunitiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpportunitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

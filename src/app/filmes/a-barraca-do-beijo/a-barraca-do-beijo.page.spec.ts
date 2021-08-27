import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ABarracaDoBeijoPage } from './a-barraca-do-beijo.page';

describe('ABarracaDoBeijoPage', () => {
  let component: ABarracaDoBeijoPage;
  let fixture: ComponentFixture<ABarracaDoBeijoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ABarracaDoBeijoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ABarracaDoBeijoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

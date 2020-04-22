import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TheMuseum } from './themuseum.page';

describe('TheMuseum', () => {
  let component: TheMuseum;
  let fixture: ComponentFixture<TheMuseum>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TheMuseum],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TheMuseum);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

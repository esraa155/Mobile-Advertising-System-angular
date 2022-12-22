import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeLocationsComponent } from './real-time-locations.component';

describe('RealTimeLocationsComponent', () => {
  let component: RealTimeLocationsComponent;
  let fixture: ComponentFixture<RealTimeLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealTimeLocationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimeLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

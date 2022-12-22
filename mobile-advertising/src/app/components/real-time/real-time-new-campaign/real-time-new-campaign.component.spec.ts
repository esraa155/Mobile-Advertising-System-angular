import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeNewCampaignComponent } from './real-time-new-campaign.component';

describe('RealTimeNewCampaignComponent', () => {
  let component: RealTimeNewCampaignComponent;
  let fixture: ComponentFixture<RealTimeNewCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealTimeNewCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimeNewCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

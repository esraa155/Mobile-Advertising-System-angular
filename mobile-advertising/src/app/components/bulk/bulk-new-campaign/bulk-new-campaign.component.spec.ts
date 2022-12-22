import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkNewCampaignComponent } from './bulk-new-campaign.component';

describe('BulkNewCampaignComponent', () => {
  let component: BulkNewCampaignComponent;
  let fixture: ComponentFixture<BulkNewCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkNewCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkNewCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

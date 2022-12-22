import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkCampaignSubmissionComponent } from './bulk-campaign-submission.component';

describe('BulkCampaignSubmissionComponent', () => {
  let component: BulkCampaignSubmissionComponent;
  let fixture: ComponentFixture<BulkCampaignSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkCampaignSubmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkCampaignSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




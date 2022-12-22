import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeReportComponent } from './real-time-report.component';

describe('RealTimeReportComponent', () => {
  let component: RealTimeReportComponent;
  let fixture: ComponentFixture<RealTimeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealTimeReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

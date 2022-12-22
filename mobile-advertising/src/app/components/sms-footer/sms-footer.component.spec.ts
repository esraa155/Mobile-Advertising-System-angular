import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsFooterComponent } from './sms-footer.component';

describe('SmsFooterComponent', () => {
  let component: SmsFooterComponent;
  let fixture: ComponentFixture<SmsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSmsComponent } from './multi-sms.component';

describe('MultiSmsComponent', () => {
  let component: MultiSmsComponent;
  let fixture: ComponentFixture<MultiSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

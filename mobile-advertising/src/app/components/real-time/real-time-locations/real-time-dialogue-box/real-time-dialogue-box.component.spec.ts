import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeDialogueBoxComponent } from './real-time-dialogue-box.component';

describe('RealTimeDialogueBoxComponent', () => {
  let component: RealTimeDialogueBoxComponent;
  let fixture: ComponentFixture<RealTimeDialogueBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealTimeDialogueBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimeDialogueBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

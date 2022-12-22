import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderDataComponent } from './sender-data.component';

describe('SenderDataComponent', () => {
  let component: SenderDataComponent;
  let fixture: ComponentFixture<SenderDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenderDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

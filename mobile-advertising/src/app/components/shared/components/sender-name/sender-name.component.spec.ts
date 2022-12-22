import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderNameComponent } from './sender-name.component';

describe('SenderNameComponent', () => {
  let component: SenderNameComponent;
  let fixture: ComponentFixture<SenderNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenderNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

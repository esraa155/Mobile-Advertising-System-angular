import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArpuComponent } from './arpu.component';

describe('ArpuComponent', () => {
  let component: ArpuComponent;
  let fixture: ComponentFixture<ArpuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArpuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

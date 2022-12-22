import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaginDetailsComponent } from './campagin-details.component';

describe('CampaginDetailsComponent', () => {
  let component: CampaginDetailsComponent;
  let fixture: ComponentFixture<CampaginDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaginDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaginDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

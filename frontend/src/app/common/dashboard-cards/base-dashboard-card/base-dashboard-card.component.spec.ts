import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDashboardCardComponent } from './base-dashboard-card.component';

describe('BaseDashboardCardComponent', () => {
  let component: BaseDashboardCardComponent;
  let fixture: ComponentFixture<BaseDashboardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseDashboardCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDashboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

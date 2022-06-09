import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDashboardStatCardComponent } from './base-dashboard-stat-card.component';

describe('BaseDashboardStatCardComponent', () => {
  let component: BaseDashboardStatCardComponent;
  let fixture: ComponentFixture<BaseDashboardStatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseDashboardStatCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDashboardStatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

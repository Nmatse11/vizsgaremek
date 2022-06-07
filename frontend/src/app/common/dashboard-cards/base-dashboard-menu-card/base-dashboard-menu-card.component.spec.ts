import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDashboardMenuCardComponent } from './base-dashboard-menu-card.component';

describe('BaseDashboardMenuCardComponent', () => {
  let component: BaseDashboardMenuCardComponent;
  let fixture: ComponentFixture<BaseDashboardMenuCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseDashboardMenuCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDashboardMenuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

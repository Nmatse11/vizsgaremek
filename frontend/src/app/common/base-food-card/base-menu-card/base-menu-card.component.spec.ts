import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseMenuCardComponent } from './base-menu-card.component';

describe('BaseMenuCardComponent', () => {
  let component: BaseMenuCardComponent;
  let fixture: ComponentFixture<BaseMenuCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseMenuCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseMenuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

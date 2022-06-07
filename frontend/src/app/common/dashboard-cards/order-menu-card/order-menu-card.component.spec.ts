import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMenuCardComponent } from './order-menu-card.component';

describe('OrderMenuCardComponent', () => {
  let component: OrderMenuCardComponent;
  let fixture: ComponentFixture<OrderMenuCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderMenuCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMenuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

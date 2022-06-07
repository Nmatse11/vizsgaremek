import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFastfoodCardComponent } from './order-fastfood-card.component';

describe('OrderFastfoodCardComponent', () => {
  let component: OrderFastfoodCardComponent;
  let fixture: ComponentFixture<OrderFastfoodCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderFastfoodCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFastfoodCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

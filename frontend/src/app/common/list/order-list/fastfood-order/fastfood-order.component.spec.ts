import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastfoodOrderComponent } from './fastfood-order.component';

describe('FastfoodOrderComponent', () => {
  let component: FastfoodOrderComponent;
  let fixture: ComponentFixture<FastfoodOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastfoodOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastfoodOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

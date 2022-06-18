import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastfoodOrderEditComponent } from './fastfood-order-edit.component';

describe('FastfoodOrderEditComponent', () => {
  let component: FastfoodOrderEditComponent;
  let fixture: ComponentFixture<FastfoodOrderEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastfoodOrderEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastfoodOrderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

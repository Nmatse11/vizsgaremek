import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastfoodProductComponent } from './fastfood-product.component';

describe('FastfoodProductComponent', () => {
  let component: FastfoodProductComponent;
  let fixture: ComponentFixture<FastfoodProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastfoodProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastfoodProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

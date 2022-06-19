import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastfoodCategoryComponent } from './fastfood-category.component';

describe('FastfoodCategoryComponent', () => {
  let component: FastfoodCategoryComponent;
  let fixture: ComponentFixture<FastfoodCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastfoodCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastfoodCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

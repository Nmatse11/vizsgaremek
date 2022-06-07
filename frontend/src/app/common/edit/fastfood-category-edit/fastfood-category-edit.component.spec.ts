import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastfoodCategoryEditComponent } from './fastfood-category-edit.component';

describe('FastfoodCategoryEditComponent', () => {
  let component: FastfoodCategoryEditComponent;
  let fixture: ComponentFixture<FastfoodCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastfoodCategoryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastfoodCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

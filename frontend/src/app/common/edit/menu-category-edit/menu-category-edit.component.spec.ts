import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCategoryEditComponent } from './menu-category-edit.component';

describe('MenuCategoryEditComponent', () => {
  let component: MenuCategoryEditComponent;
  let fixture: ComponentFixture<MenuCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCategoryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCategoryEditorComponent } from './menu-category-editor.component';

describe('MenuCategoryEditorComponent', () => {
  let component: MenuCategoryEditorComponent;
  let fixture: ComponentFixture<MenuCategoryEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCategoryEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCategoryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

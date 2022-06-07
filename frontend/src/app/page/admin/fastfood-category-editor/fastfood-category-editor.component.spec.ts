import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastfoodCategoryEditorComponent } from './fastfood-category-editor.component';

describe('FastfoodCategoryEditorComponent', () => {
  let component: FastfoodCategoryEditorComponent;
  let fixture: ComponentFixture<FastfoodCategoryEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastfoodCategoryEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastfoodCategoryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

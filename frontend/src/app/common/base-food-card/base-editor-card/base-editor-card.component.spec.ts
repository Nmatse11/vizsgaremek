import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseEditorCardComponent } from './base-editor-card.component';

describe('BaseEditorCardComponent', () => {
  let component: BaseEditorCardComponent;
  let fixture: ComponentFixture<BaseEditorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseEditorCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseEditorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

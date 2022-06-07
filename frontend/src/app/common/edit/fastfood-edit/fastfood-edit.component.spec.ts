import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastfoodEditComponent } from './fastfood-edit.component';

describe('FastfoodEditComponent', () => {
  let component: FastfoodEditComponent;
  let fixture: ComponentFixture<FastfoodEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastfoodEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastfoodEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

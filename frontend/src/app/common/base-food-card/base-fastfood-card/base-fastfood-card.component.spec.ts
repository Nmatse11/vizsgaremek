import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFastfoodCardComponent } from './base-fastfood-card.component';

describe('BaseFastfoodCardComponent', () => {
  let component: BaseFastfoodCardComponent;
  let fixture: ComponentFixture<BaseFastfoodCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseFastfoodCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseFastfoodCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

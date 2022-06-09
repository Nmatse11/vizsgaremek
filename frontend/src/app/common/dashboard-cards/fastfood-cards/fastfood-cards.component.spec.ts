import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastfoodCardsComponent } from './fastfood-cards.component';

describe('FastfoodCardsComponent', () => {
  let component: FastfoodCardsComponent;
  let fixture: ComponentFixture<FastfoodCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastfoodCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastfoodCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

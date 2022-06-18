import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOrderEditComponent } from './menu-order-edit.component';

describe('MenuOrderEditComponent', () => {
  let component: MenuOrderEditComponent;
  let fixture: ComponentFixture<MenuOrderEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOrderEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOrderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

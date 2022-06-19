import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseComponentListComponent } from './base-component-list.component';

describe('BaseComponentListComponent', () => {
  let component: BaseComponentListComponent;
  let fixture: ComponentFixture<BaseComponentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseComponentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseComponentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

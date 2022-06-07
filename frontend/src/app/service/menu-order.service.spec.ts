import { TestBed } from '@angular/core/testing';

import { MenuOrderService } from './menu-order.service';

describe('MenuOrderService', () => {
  let service: MenuOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

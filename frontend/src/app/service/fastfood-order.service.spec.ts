import { TestBed } from '@angular/core/testing';

import { FastfoodOrderService } from './fastfood-order.service';

describe('FastfoodOrderService', () => {
  let service: FastfoodOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FastfoodOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

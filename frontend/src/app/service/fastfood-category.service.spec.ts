import { TestBed } from '@angular/core/testing';

import { FastfoodCategoryService } from './fastfood-category.service';

describe('FastfoodCategoryService', () => {
  let service: FastfoodCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FastfoodCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

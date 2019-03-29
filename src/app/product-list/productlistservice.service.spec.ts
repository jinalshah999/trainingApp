import { TestBed } from '@angular/core/testing';

import { ProductlistserviceService } from './productlistservice.service';

describe('ProductlistserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductlistserviceService = TestBed.get(ProductlistserviceService);
    expect(service).toBeTruthy();
  });
});

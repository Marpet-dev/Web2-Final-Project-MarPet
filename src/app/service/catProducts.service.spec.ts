import { TestBed } from '@angular/core/testing';

import { CatProductsService } from './catProducts.service';

describe('CatProductsService', () => {
  let service: CatProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

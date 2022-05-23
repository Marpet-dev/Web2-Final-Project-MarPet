import { TestBed } from '@angular/core/testing';

import { DogProductsService } from './dogProducts.service';

describe('DogProductsService', () => {
  let service: DogProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

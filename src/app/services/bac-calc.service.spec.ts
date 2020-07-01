import { TestBed } from '@angular/core/testing';

import { BacCalcService } from './bac-calc.service';

describe('BacCalcService', () => {
  let service: BacCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BacCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

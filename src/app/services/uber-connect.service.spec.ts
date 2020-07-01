import { TestBed } from '@angular/core/testing';

import { UberConnectService } from './uber-connect.service';

describe('UberConnectService', () => {
  let service: UberConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UberConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

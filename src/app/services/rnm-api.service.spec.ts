import { TestBed } from '@angular/core/testing';

import { RnmApiService } from './rnm-api.service';

describe('RnmApiService', () => {
  let service: RnmApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RnmApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
